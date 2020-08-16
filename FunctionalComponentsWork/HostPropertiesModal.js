import React, { useState } from "react";
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table
} from 'reactstrap';

import Moment from 'react-moment';

import styled from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";


const StyledModal = Modal.styled`
  margin-top: 122px;
  width: 100%;
  height: 100%;
  display: inline;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;


let bgColor = '#f7fcff';
const CustomHostPropertiesModal = styled(StyledModal)`
    background-color: ${bgColor};
`;


function FancyModalButton({ selectedHost, selectedIndexes, handleClose }) {

  const [isOpen, setIsOpen] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [serviceDetailsData, setServiceDetailsData] = useState({});

  function toggleModal(e) {
    setIsOpen(!isOpen);
    handleClose()
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

  function getHostAddress() {
    let hostData = selectedHost;
    let hostAddress = hostData.Address;
    return hostAddress;
  }

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
                style={{ fontSize: '15px' }}
                className="details"
              >
                {hostProperties}
              </Table>
            </div>
          )}
      </div>
    );
  }



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
      <CustomHostPropertiesModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <div
          style={
            {
              fontSize: '20px',
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '10px'
            }
          }>
          Host Properties <i className="fa fa-desktop" style={{ marginLeft: '10px', marginRight: '10px' }}></i>{host_address}
          <button
            onClick={toggleModal}
            style={
              {
                float: 'right',
                fontSize: '76%',
                border: 'none',
                outline: 'none'
              }
            }>X</button>
        </div>
        <div>{host_properties_details}</div>
      </CustomHostPropertiesModal>
    </div>
  );

}


function HostPropertiesModal(props) {
  return (
    <ModalProvider>
      <FancyModalButton
        selectedHost={props.selectedHost}
        selectedIndexes={props.selectedIndexes}
        handleClose={props.handleClose}
      />
    </ModalProvider>
  );
}


export default HostPropertiesModal;