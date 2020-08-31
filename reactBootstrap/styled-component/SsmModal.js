import React, { useState } from "react";
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Table
} from 'reactstrap';

import Moment from 'react-moment';

import styled from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";

//import ServiceStatusModal from '../views/Monitoring/Hosts/ServiceStatusModal'


const StyledModal = Modal.styled`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;


let bgColorM = 'yellow';
const HostStatusModal = styled(StyledModal)`
    background-color: ${bgColorM};
`;

const HostPropertiesModal = styled(StyledModal)`
    background-color: red;
`;

const ServiceStatusModal = styled(StyledModal)`
    background-color: blue;
`;

const SystemSummaryModal = styled(StyledModal)`
    background-color: green;
`;



function FancyModalButton({ selectedModal, selectedHost, selectedIndexes, host }) {

    //console.log(selectedHost.Address)

    const [isOpen, setIsOpen] = useState(true);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setOpacity(1);
    }

    function beforeClose() {
        return new Promise(resolve => {
            setOpacity(0);
            setTimeout(resolve, 200);
        });
    }


    // Host status modal section ------------------------------------

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
                                    style={{ fontSize: '12px' }}
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

    if (selectedModal === "host") {

        const host_status_details =
            selectedIndexes.length > 0 && (selectedHost !== undefined)
                ? showDetails_host_status()
                : null;

        const host_address =
            selectedIndexes.length > 0 && (selectedHost !== undefined)
                ? getHostAddress()
                : null;

        return (
            <div>
                <HostStatusModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                >
                    <div>
                        Host Status <i className="fa fa-desktop" style={{ marginLeft: '10px', marginRight: '10px' }}></i>{host_address}
                    </div>
                    <div>
                        {host_status_details}
                    </div>
                    <span>I am a red modal!</span>
                    <button onClick={toggleModal}>Close me</button>
                </HostStatusModal>
            </div>
        );
    }

    //----------------------------------------------------------------------


    // Host Properties Section ---------------------------------------------

    function showDetails_host_properties() {
        let hostProperties = [];

        hostProperties.push(
            <tbody key={Math.floor(Math.random() * 100001)}>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Check Interval (s)</td>
                    <td>#300</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Retry Interval (s)</td>
                    <td>#30</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Max Check Attempts</td>
                    <td>#3</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">SuperDoctor 5 Port</td>
                    <td>#5999</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">BMC Address</td>
                    <td>#10.146.125.9</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">BMC MAC Address</td>
                    <td>#00:25:90:5C:9B:50</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">WOL MAC Address</td>
                    <td>#00-25-90-5c-9b-40</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Send Notifications On</td>
                    <td>#Down, Recovery</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Location</td>
                    <td>#HK</td>
                </tr>
                <tr key={Math.floor(Math.random() * 100001)}>
                    <td className="label bold">Notes</td>
                    <td>#note-1</td>
                </tr>
            </tbody>
        );

        return (
            <div style={{ padding: '5px 11px' }}>
                {selectedIndexes.length > 1 ? (
                    'Select an object to view its details.'
                ) : (
                        <div>
                            <Table
                                hover
                                width="100%"
                                bordered
                                size="sm"
                                style={{ fontSize: '12px' }}
                                className="details"
                            >
                                {hostProperties}
                            </Table>
                        </div>
                    )}
            </div>
        );
    }

    if (selectedModal === "properties") {

        const host_properties_details =
            selectedIndexes.length > 0 && (selectedHost !== undefined)
                ? showDetails_host_properties()
                : null;

        const host_address =
            selectedIndexes.length > 0 && (selectedHost !== undefined)
                ? getHostAddress()
                : null;

        return (
            <div>
                <HostPropertiesModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                >
                    <div>
                        Host Properties <i className="fa fa-desktop" style={{ marginLeft: '10px', marginRight: '10px' }}></i>{host_address}
                    </div>
                    <div>
                        {host_properties_details}
                    </div>
                    <span>I am a red modal!</span>
                    <button onClick={toggleModal}>Close me</button>
                </HostPropertiesModal>
            </div>
        );
    }

    if (selectedModal === "service") {
        return (
            <div>
                <ServiceStatusModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                >
                    <span>I am a red modal!</span>
                    <button onClick={toggleModal}>Close me</button>
                </ServiceStatusModal>
            </div>
        );
    }


    if (selectedModal === "summary") {
        return (
            <div>
                <SystemSummaryModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                >
                    <span>I am a red modal!</span>
                    <button onClick={toggleModal}>Close me</button>
                </SystemSummaryModal>
            </div>
        );
    }

}


function SsmModal(props) {
    return (
        <ModalProvider>
            <FancyModalButton
                selectedModal={props.selectedModal}
                selectedHost={props.selectedHost}
                selectedIndexes={props.selectedIndexes}
                host={props.host}
            />
        </ModalProvider>
    );
}


export default SsmModal;

// const mapStateToProps = (state) => {
//     return {
//         host: state.hostReducer,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {}
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SsmModal);

