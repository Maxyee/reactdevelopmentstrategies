import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  AppBar,
  Button,
  Input,
  RadioGroup,
  Radio,
  Select,
  IconCancel,
  IconCheckmark,
  IconInfo,
  IconCalendar,
  TooltipTrigger,
  LoadingStripes,
  LoadingSpinner,
  Tooltip
} from 'html-fw-core';
import { UserIcon, ClockIcon } from '../../Icons';
import { getBudgetPlanningInitializationSelector, getAllCommands, getPlanningYear } from '../../../redux/selectors';
import {
  CpeLastValidModelStatusLoader,
  CpeModelStatusLoader,
  CpeSimulationModelStatusLastValidLoader,
  CpeSimulationModelStatusLoader,
  PlanningYearLoader
} from '../../DataLoaders';
import './BudgetPlanningStatusBar.scss';
import { VEMSO_OWNER_ID, SIMULATION_OWNER_ID, CENTRALIZED, DECENTRALIZED } from '../../../data/constants';
import { SET_LOADING_OWNER, UNINITIALIZE_GRID, SET_UNIVERSE_RADIO_VALUE, SET_UNIVERSE_SELECT_VALUE } from '../../../redux/actions/types';
import { scopedInstanceIds } from '../../../redux/store';

const {
  BPI_SUSTAINMENT_INFLATION_TABLE_ID,
  BPI_DISBURSEMENT_TABLE_ID,
  BPI_CUSTOMIZE_VARIANCES_TABLE_ID,
  BPI_LEASE_SETUP_ALLOCATIONS_TABLE_ID,
  BPI_LEASE_SETUP_ADJUSTMENTS_TABLE_ID
} = scopedInstanceIds;

const BudgetPlanningStatusBar = ({
  cpeModelStatus,
  cpeLastModelStatus,
  simulationModelStatus,
  simulationModelStatusLastValid,
  allCommands,
  universeRadioValue,
  universeSelectValue,
  dataPlanningYear,
  // Data actions
  setLoadingOwner,
  setUniverseRadioVal,
  setUniverseSelVal
}) => {
  const planningYearFromData = dataPlanningYear && cpeModelStatus
    ? cpeModelStatus.planningYear : null;
  const [planningYear, setPlanningYear] = useState(planningYearFromData);
  const [editPlanningYear, setEditPlanningYear] = useState(planningYearFromData);
  const [displayChangePlanningYear, setDisplayChangePlanningYear] = useState(false);

  const universeSelBtnGrp = 'univSelBtnGrp';
  let universeSelOpts = [{ value: 'ACC', label: 'ACC' }];
  if (allCommands) {
    universeSelOpts = allCommands.map(command => ({ value: command.label, label: command.label }));
  }

  console.log(cpeModelStatus);

  const cpeLastmodelStatusPopupContent = cpeLastModelStatus !== null ? (
    <div className="cpe-last-model-status-popup">
      <p>User: {cpeLastModelStatus.lastRunUser !== undefined ? cpeLastModelStatus.lastRunUser : null}</p>
      <p>Last Run End: {cpeLastModelStatus.lastRunEnd !== undefined ? moment(cpeLastModelStatus.lastRunEnd).format('DD MMM YYYY, HH:mm [Z]') : null}</p>
      <p>Planning Year: {cpeLastModelStatus.planningYear !== undefined ? cpeLastModelStatus.planningYear : null}</p>
    </div>
  ) : null;

  const simulationModelStatusLastValidPopupContent = simulationModelStatusLastValid !== null ? (
    <div className="simulation-model-status-last-valid-popup">
      <p>User: {simulationModelStatusLastValid.lastRunUser !== undefined ? simulationModelStatusLastValid.lastRunUser : null}</p>
      <p>Last Run End: {simulationModelStatusLastValid.lastRunEnd !== undefined ? moment(simulationModelStatusLastValid.lastRunEnd).format('DD MMM YYYY, HH:mm [Z]') : null}</p>
      <p>Planning Year: {simulationModelStatusLastValid.planningYear !== undefined ? simulationModelStatusLastValid.planningYear : null}</p>
    </div>
  ) : null;

  const changeCurrentPlanningYearBtn = <Button theme="link" className="planning-change-btn" onClick={() => setDisplayChangePlanningYear(true)}>Change</Button>;
  const changeCurrentPlanningYearInput = (
    <span className="change-planning-year-input">
      <Input
        type="number"
        value={editPlanningYear || planningYearFromData}
        onChange={e => setEditPlanningYear(Number.parseInt(e.target.value || 0, 10))}
      />
      <Button
        onClick={() => {
          setPlanningYear(editPlanningYear);
          setDisplayChangePlanningYear(false);
        }}
      >Save</Button>
      <Button
        theme="link"
        onClick={() => {
          setEditPlanningYear(planningYear);
          setDisplayChangePlanningYear(false);
        }}
      >Cancel</Button>
    </span>
  );
  const owner = cpeLastModelStatus !== undefined && cpeLastModelStatus ?
    cpeLastModelStatus.owner : VEMSO_OWNER_ID;

  let disableLoadLastSimButton = true;
  if (simulationModelStatus && simulationModelStatus.lastRunStart) {
    disableLoadLastSimButton = false;
  }

  const handleNewModelUniverseSelection = (_, nextValue) => {
    setUniverseRadioVal(nextValue);
    if (nextValue === CENTRALIZED && owner !== VEMSO_OWNER_ID) {
      setLoadingOwner(VEMSO_OWNER_ID);
    }
    else if (nextValue === DECENTRALIZED) {
      setLoadingOwner(universeSelectValue);
    }
  };

  const handleDecentralizedSelectionChange = (value) => {
    setUniverseSelVal(value);
    setLoadingOwner(value);
  };

  const makeLastRunEndFormat = (lastRunEnd) => {
    const date = moment(lastRunEnd);
    if (date.isValid()) {
      return date.format('DD MMM YYYY, HH:mm [Z]');
    }
    return '--';
  };

  return (
    <div className="three-col budget-planning-status-bar">
      <div>
        <AppBar>
          <h1 className="section-title">Model Run Status</h1>
          <Button theme={'link'} onClick={() => setLoadingOwner(owner)}>Load Last Run Parameters</Button>
        </AppBar>
        <div className="flex-v status-col-content">
          {cpeModelStatus ?
            <div className="status-list">
              <div>
                <UserIcon />
                {
                  cpeModelStatus.lastRunUser !== undefined ?
                    cpeModelStatus.lastRunUser : null
                }
              </div>
              <div>
                <ClockIcon />
                {
                  cpeModelStatus.lastRunEnd !== undefined ?
                    makeLastRunEndFormat(cpeModelStatus.lastRunEnd)
                    : null
                }
              </div>
              <div>
                {
                  cpeModelStatus.status !== undefined && cpeModelStatus.status === 'ERROR' ?
                    <Tooltip
                      popupComponent={cpeModelStatus.errorMessage}
                      placement="right"
                    >
                      <span>
                        <IconCancel theme={'primary'} /> ERROR
                          <Button theme={'link'}>
                            <IconInfo theme={'primary'} />
                          </Button>
                      </span>
                    </Tooltip>
                    :
                    <span>
                      <IconCheckmark />{cpeModelStatus.status}
                    </span>
                }
              </div>
              {
                dataPlanningYear ?
                  <div>
                    <IconCalendar theme={'primary'} />
                    Current Planning Year:&nbsp;
                    {`${displayChangePlanningYear ? '' : planningYear || dataPlanningYear}`}
                    {
                      displayChangePlanningYear ?
                        changeCurrentPlanningYearInput
                        : changeCurrentPlanningYearBtn
                    }
                  </div>
                  :
                  <div>
                    <LoadingSpinner />
                    <PlanningYearLoader />
                  </div>
              }
            </div> :
            <div className={'loader-container'}>
              <CpeModelStatusLoader />
              <LoadingStripes />
            </div>
          }
          <hr />
          {
            cpeLastModelStatus ?
              <TooltipTrigger
                position={['bottom']}
                content={cpeLastmodelStatusPopupContent}
                portalSelector="#tooltip-trigger-container"
              >
                <span><Button theme={'link'} className={'valid-run-status-btn'}>Last Valid Run: {cpeLastModelStatus.lastRunEnd !== undefined ? moment(cpeLastModelStatus.lastRunEnd).format('DD MMM YYYY, HH:mm [Z]') : null}</Button></span>
              </TooltipTrigger>
              :
              <div>
                <CpeLastValidModelStatusLoader />
                <LoadingSpinner />
              </div>
          }
        </div>
      </div>
      { /* Simulation Status */}
      <div>
        <AppBar>
          <h1 className="section-title">Simulation Status</h1>
          <Button
            theme={'link'}
            disabled={disableLoadLastSimButton}
            onClick={() => setLoadingOwner(SIMULATION_OWNER_ID)}
          >
              Load Last Simulation Parameters
          </Button>
        </AppBar>
        <div className="flex-v status-col-content">
          {
            simulationModelStatus ?
              <div className="status-list">
                <div>
                  <ClockIcon />
                  {
                    simulationModelStatus.lastRunEnd !== undefined ?
                      moment(simulationModelStatus.lastRunEnd).format('DD MMM YYYY, HH:mm [Z]')
                      : '--'
                  }
                </div>
                <div>
                  {
                    simulationModelStatus.status !== undefined && simulationModelStatus.status === 'ERROR' ?
                      <Tooltip
                        popupComponent={simulationModelStatus.errorMessage}
                        placement="right"
                      >
                        <span>
                          <IconCancel theme={'primary'} /> ERROR
                          <Button theme={'link'}>
                            <IconInfo theme={'primary'} />
                          </Button>
                        </span>
                      </Tooltip>
                      :
                      <span>
                        <IconCheckmark />{simulationModelStatus.status || 'No Status'}
                      </span>
                  }
                </div>
                <div>
                  <IconCalendar theme={'primary'} />
                  Planning Year: {
                    simulationModelStatus.planningYear !== undefined ?
                      simulationModelStatus.planningYear : 'N/A'
                  }
                </div>
              </div>
              :
              <div className={'loader-container'}>
                <CpeSimulationModelStatusLoader />
                <LoadingStripes />
              </div>
          }
          <hr />
          {
            simulationModelStatusLastValid ?
              <TooltipTrigger
                position={['bottom']}
                content={simulationModelStatusLastValidPopupContent}
                portalSelector="#tooltip-trigger-container"
              >
                <span><Button theme={'link'} className={'valid-run-status-btn'}>Last Valid Simulation: {simulationModelStatusLastValid.lastRunEnd !== undefined ? moment(simulationModelStatusLastValid.lastRunEnd).format('DD MMM YYYY, HH:mm [Z]') : null}</Button></span>
              </TooltipTrigger>
              :
              <div>
                <CpeSimulationModelStatusLastValidLoader />
                <LoadingSpinner />
              </div>
          }
        </div>
      </div>
      { /* New Model - Universe Selection */}
      <div>
        <AppBar>
          <h1 className="section-title">New Model - Universe Selection</h1>
        </AppBar>
        <div className="flex-v status-col-content">
          The administrator must provide settings for both Centralized
          and Decentralized (all MAJCOMs) in order to run or simulate the model.
            <div className="flex universe-sel-btns">
              <RadioGroup
                name={universeSelBtnGrp}
                display="block"
                onChange={handleNewModelUniverseSelection}
                value={universeRadioValue}
              >
                <Radio id={CENTRALIZED} value={CENTRALIZED}>Centralized (AFVM)</Radio>
                <Radio id={DECENTRALIZED} value={DECENTRALIZED}>Decentralized (MAJCOMs):</Radio>
              </RadioGroup>
              <Select options={universeSelOpts} name="universeSelect" onChange={e => handleDecentralizedSelectionChange(e.target.value)} value={universeSelectValue} />
            </div>
        </div>
      </div>
    </div>);
};

BudgetPlanningStatusBar.propTypes = {
  cpeModelStatus: PropTypes.object,
  cpeLastModelStatus: PropTypes.object,
  simulationModelStatus: PropTypes.object,
  simulationModelStatusLastValid: PropTypes.object,
  setLoadingOwner: PropTypes.func,
  setUniverseRadioVal: PropTypes.func,
  setUniverseSelVal: PropTypes.func,
  allCommands: PropTypes.array,
  universeRadioValue: PropTypes.string,
  universeSelectValue: PropTypes.string,
  dataPlanningYear: PropTypes.number
};

const mapStateToProps = (state) => {
  const stateSlice = getBudgetPlanningInitializationSelector(state);
  const cpeModelStatus = stateSlice.cpeModelStatus;
  const cpeLastModelStatus = stateSlice.cpeLastModelStatus;
  const simulationModelStatus = stateSlice.simulationModelStatus;
  const simulationModelStatusLastValid = stateSlice.simulationModelStatusLastValid;
  const universeSelection = stateSlice.universeSelection;
  return {
    cpeModelStatus,
    cpeLastModelStatus,
    simulationModelStatus,
    simulationModelStatusLastValid,
    allCommands: getAllCommands(state),
    universeRadioValue: universeSelection && universeSelection.radio ?
      universeSelection.radio : CENTRALIZED,
    universeSelectValue: universeSelection && universeSelection.selection ?
      universeSelection.selection : 'ACC',
    dataPlanningYear: getPlanningYear(state)
  };
};

const tablesToReset = [
  BPI_SUSTAINMENT_INFLATION_TABLE_ID,
  BPI_DISBURSEMENT_TABLE_ID,
  BPI_CUSTOMIZE_VARIANCES_TABLE_ID,
  BPI_LEASE_SETUP_ALLOCATIONS_TABLE_ID,
  BPI_LEASE_SETUP_ADJUSTMENTS_TABLE_ID
];

const mapDispatchToProps = dispatch => ({
  setLoadingOwner: (owner) => {
    dispatch({
      type: SET_LOADING_OWNER,
      payload: owner
    });
    tablesToReset.forEach(tableId => dispatch({
      type: UNINITIALIZE_GRID,
      scope: tableId
    }));
  },
  setUniverseRadioVal: value => dispatch({
    type: SET_UNIVERSE_RADIO_VALUE,
    payload: value
  }),
  setUniverseSelVal: value => dispatch({
    type: SET_UNIVERSE_SELECT_VALUE,
    payload: value
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetPlanningStatusBar);
