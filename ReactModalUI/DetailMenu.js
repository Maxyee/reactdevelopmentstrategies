import React from 'react';

import { connect } from 'react-redux';

import {

    Dropdown

  } from 'react-bootstrap';



import HostStatusModal from "./HostStatusModal";

import HostPropertiesModal from "./HostPropertiesModal";

import ServiceStatusModal from "./ServiceStatusModal";

import SystemSummaryModal from "./SystemSummaryModal";



class DropDownMenu extends React.Component {



    constructor(props) {

        super(props);



        this.selectedIndexes = this.props.selectedIndexes;

        this.cellIndex = this.props.cellIndex;



        this.handleShow = this.handleShow.bind(this);

        this.handleShowService = this.handleShowService.bind(this);

        this.handleShowSystem = this.handleShowSystem.bind(this);

        this.handleShowProperties = this.handleShowProperties.bind(this);

    }



    handleShow() {

        this.props.handleShow();

    }

    handleShowService() {

        this.props.handleShowService();

    }

    handleShowSystem() {

        this.props.handleShowSystem();

    }

    handleShowProperties() {

        this.props.handleShowProperties();

    }

    

    render() {

        return (

            <Dropdown style={{ position: 'inherit', transform: '0px 0px', borderRadius: '0px' }}>

                <Dropdown.Toggle style={{ color: 'transparent', padding: '0rem 0rem', boxShadow: 'none' }} variant="Secondary" id="dropdown-basic">

                    <i

                        className={`fa fa-ellipsis-h ${this.selectedIndexes.includes(this.cellIndex) ? 'dot-white' : 'dot-black'}`}

                    >

                    </i>

                </Dropdown.Toggle>



                <Dropdown.Menu style={{ color: 'red', position: 'inherit', transform: '0px 0px' }}>

                    <Dropdown.Item href="" onClick={this.handleShow}>Host Status</Dropdown.Item>

                    <Dropdown.Item href="" onClick={this.handleShowService}>Services Status</Dropdown.Item>

                    <Dropdown.Item href="" onClick={this.handleShowSystem}>System summary</Dropdown.Item>

                    <Dropdown.Item href="" onClick={this.handleShowProperties}>Host Properties</Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>

        )

    }

}



class DetailMenu extends React.Component {



    constructor(props) {

        super(props);



        this.state = {

            show: false,

            showService: false,

            showSystem: false,

            showProperties: false

        };



        this.handleShow = this.handleShow.bind(this);

        this.handleClose = this.handleClose.bind(this);

    

        this.handleShowService = this.handleShowService.bind(this);

        this.handleCloseService = this.handleCloseService.bind(this);

    

        this.handleShowSystem = this.handleShowSystem.bind(this);

        this.handleCloseSystem = this.handleCloseSystem.bind(this);

    

        this.handleShowProperties = this.handleShowProperties.bind(this);

        this.handleCloseProperties = this.handleCloseProperties.bind(this);

    }



    handleClose() {

        this.setState({ show: false });

    }

    handleShow() {

        this.setState({ show: true });

    }



    handleCloseService() {

        this.setState({ showService: false });

    }

    handleShowService() {

        this.setState({ showService: true });

    }



    handleCloseSystem() {

        this.setState({ showSystem: false });

    }

    handleShowSystem() {

        this.setState({ showSystem: true });

    }



    handleCloseProperties() {

        this.setState({ showProperties: false });

    }

    handleShowProperties() {

        this.setState({ showProperties: true });

    }



    render() {



        const hostStatusModal = <HostStatusModal 

            selectedHost={this.props.selectedHost} 

            selectedIndexes={this.props.selectedIndexes}

            hostDetailsActiveTab={this.props.hostDetailsActiveTab}

            setHostDetailsActiveTab={this.props.setHostDetailsActiveTab}

            handleClose={this.handleClose}

            show={this.state.show}

        />;



        const hostPropertiesModal = <HostPropertiesModal

            selectedHost={this.props.selectedHost}

            selectedIndexes={this.props.selectedIndexes}

            hostDetailsActiveTab={this.props.hostDetailsActiveTab}

            setHostDetailsActiveTab={this.props.setHostDetailsActiveTab}

            handleClose={this.handleCloseProperties}

            show={this.state.showProperties}

        />;



        const serviceStatusModal = <ServiceStatusModal

            selectedHost={this.props.selectedHost}

            selectedIndexes={this.props.selectedIndexes}

            hostDetailsActiveTab={this.props.hostDetailsActiveTab}

            setHostDetailsActiveTab={this.props.setHostDetailsActiveTab}

            handleClose={this.handleCloseService}

            host={this.props.host}

            show={this.state.showService}

        />;



        const systemSummaryModal = <SystemSummaryModal 

            selectedHost={this.props.selectedHost}

            selectedIndexes={this.props.selectedIndexes}

            hostDetailsActiveTab={this.props.hostDetailsActiveTab}

            setHostDetailsActiveTab={this.props.setHostDetailsActiveTab}

            handleClose={this.handleCloseSystem}

            host={this.props.host}

            show={this.state.showSystem}

        />;



        const dropdownMenu = <DropDownMenu

            cellIndex={this.props.cellIndex.index}

            selectedIndexes={this.props.selectedIndexes}

            handleShow={this.handleShow}

            handleShowService={this.handleShowService}

            handleShowSystem={this.handleShowSystem}

            handleShowProperties={this.handleShowProperties}

        />;



        if(this.state.show)

            return hostStatusModal;



        if(this.state.showProperties)

            return hostPropertiesModal;

        

        if(this.state.showService)

            return serviceStatusModal;



        if (this.state.showSystem)

            return systemSummaryModal;



        return dropdownMenu;

        

    }

}



const mapStateToProps = (state) => {

    return {

        host: state.hostReducer,

    };

};



const mapDispatchToProps = (dispatch) => {

    return {}

};



export default connect(mapStateToProps, mapDispatchToProps)(DetailMenu);