import React, { useState } from "react";
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table
} from 'reactstrap';

import Moment from 'react-moment';

import styled from "styled-components";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from '@bootstrap-styled/v4';

import BootstrapProvider from '@bootstrap-styled/provider';


const myTheme = {
  '$btn-primary-bg': 'transparent',
  '$btn-primary-color': '#328787',
  '$btn-box-shadow': 'none',
  '$modal-content-bg': '#07e883',
  '$border-radius-lg': '0px',
  '$btn-font-weight': '600',
};


function HostStatusModalBoot(props) {

  const { selectedHost, selectedIndexes } = props

  const [isOpen, setIsOpen] = useState(true);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    props.handleClose();
    //window.location.reload(false);
  }

  function getHostAddress() {
    let hostData = selectedHost;
    let hostAddress = hostData.Address;
    return hostAddress;
  }

  function detailsStatusFormatter(value) {
    //Util functions
    function makeTitleCase(str) {
      return _.startCase(_.toLower(str));
    }

    if (_.toUpper(value) === 'DOWN') {
      return (
        <span>
          <FontAwesomeIcon icon="times-circle" style={{ color: 'red' }} />
              &nbsp;&nbsp;{makeTitleCase(value)}
        </span>
      );
    } else if (_.toUpper(value) === 'UNREACHABLE') {
      return (
        <span>
          <FontAwesomeIcon
            icon="exclamation-triangle"
            style={{ color: 'orange' }}
          />
              &nbsp;&nbsp;{makeTitleCase(value)}
        </span>
      );
    } else if (_.toUpper(value) === 'UP') {
      return (
        <span>
          <FontAwesomeIcon icon="check-circle" style={{ color: 'limeGreen' }} />
              &nbsp;&nbsp;{makeTitleCase(value)}
        </span>
      );
    }
    return null;
  }

  function showDetails_host_status() {
    let hostData = selectedHost;
    let hostStatus = [];

    if (hostData !== undefined) {
      hostStatus.push(
        <tbody key={Math.floor(Math.random() * 100001)}>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Status</td>
            <td>{detailsStatusFormatter(hostData.Status)}</td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Address</td>
            <td>{hostData.Address}</td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Description</td>
            <td>{hostData.Description}</td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Last Check</td>
            <td>
              <Moment
                interval={0}
                tz="Asia/Hong_Kong"
                format="YYYY/MM/DD HH:mm:ss"
              >
                {hostData.LastCheck}
              </Moment>
            </td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">State Type</td>
            <td>{hostData.StateType}</td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Attempt</td>
            <td>#CHECK 1/4</td>
          </tr>
          <tr key={Math.floor(Math.random() * 100001)}>
            <td className="label bold">Status Information</td>
            <td>{hostData.StatusInformation}</td>
          </tr>
        </tbody>
      );

      return (
        <div style={{ padding: '5px 11px', minHeight: '280px' }}>
          {selectedIndexes.length > 1 ? (
            'Select an object to view its details.'
          ) : (
              <div>
                <Table
                  hover
                  width="100%"
                  bordered
                  size="sm"
                  style={{ fontSize: '15px', backgroundColor: 'white' }}
                  className="details"
                >
                  {hostStatus}
                </Table>
              </div>
            )}
        </div>
      )
    }
  }



  const host_status_details =
    selectedIndexes.length > 0 && (selectedHost !== undefined)
      ? showDetails_host_status()
      : null;

  const host_address =
    selectedIndexes.length > 0 && (selectedHost !== undefined)
      ? getHostAddress()
      : null;

  return (
    <BootstrapProvider theme={myTheme}>
      {/* <Button>Accomplished my wish</Button> */}
      <Modal
        isOpen={isOpen}
        modalClassName='modal-container custom-map-modal'
        fade={false}
        style={{ top: '30px', position: 'fixed' }}
        backdrop={false}
      >
        <ModalBody>
          <div style={{ fontSize: '23px', marginBottom: '20px' }}>
            <span style={{ color: '#328787', marginLeft: '10px' }}>Host Status</span>
            <i className="fa fa-desktop" style={{ marginLeft: '10px', marginRight: '10px' }}></i>
            {host_address}
            <Button onClick={toggleModal} hover={false} style={{ float: 'right' }}>X</Button>
          </div>
          <div>
            {host_status_details}
          </div>
        </ModalBody>
      </Modal>
    </BootstrapProvider>

  );
}

export default HostStatusModalBoot;