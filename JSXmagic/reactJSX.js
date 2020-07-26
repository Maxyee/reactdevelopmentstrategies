import React, { Component } from 'react';
import { connect } from 'react-redux';
// css file
import './filterBox.css';



import {
  SET_HOSTS,
  HOST_ROW_SELECT,
  HOST_ROW_DESELECT,
  SELECT_HOSTSTATUS,
  SELECT_SERVICESTATUS,
  SELECT_HOST_TYPE,
  MODAL_ACTION,
  SEARCH_ACTION,
  ENABLE_FILTER,
  SELECT_MENUITEM,
  HOST_CLEAR_SELECTION,
  REMOVE_SEARCH_ITEM,
  CLEAN_SERVICE_STATUS,
  CLEAN_HOST_STATUS,
  CLEAN_HOST_TYPE,
  SECURE_DELETE_DIALOG_OPEN,

} from '../../../../constants/action-types/host-actions';



class FilterBox extends Component {

  removeItem = (data, selectedValue) => {
    // console.log('key parameter value')
    // console.log(data)
    console.log(selectedValue)

    let value = ""
    let data2 = "clear"
    console.log('removing item from search object')
    this.props.remove_search_item(data)
    this.props.host_clearRows()

    let selectedSearch = this.props.host.search
    let searchObjectCount = Object.keys(selectedSearch).length

    if (searchObjectCount === 0) {
      this.props.searchAction(data2, value)
    }

    if (data === 'serviceStatus') {
      this.props.clean_service_status()
    }

    if (data === 'Status') {
      this.props.clean_host_status()
    }

    if (data === 'Type') {
      this.props.clean_host_type()
    }

    //if(selectedSearch.length)
    this.props.searchAction(data, value)
    this.props.remove_search_item(data)
    this.props.host_clearRows()
    let single = new Array(0);
    single.push(0);
    this.props.host_selectRows(single);

  }

  render() {

    let selectedSearch = this.props.host.search

    return (
      <div>
        {Object.keys(selectedSearch).length > 0 ? (
          <div className="filterbox" style={{ display: 'flex' }}>
            {/* Filter icon */}
            <i
              className="fa fa-filter"
              style={{ color: 'blue', marginTop: '3px' }}
            ></i>
            {/* Filter heading */}
            <span style={{ marginLeft: '5px' }}>Filters</span>
            {/* Filtered item */}
            <div className="itemboxWrapper">
              {Object.keys(selectedSearch).map((data, i) =>
                <div key={i} className="itembox">
                  {/* <p> {data === 'serviceStatus' ? 'Service Status'
                    : 'Product' ? 'MB Model Name'
                      : 'SerialNumber' ? 'MB Serial Number'
                        : data} : {selectedSearch[data]}</p> */}
                  {
                    (() => {
                      if (data === 'serviceStatus')
                        return <p>Service Status : {selectedSearch[data]}</p>
                      if (data === 'Product')
                        return <p>MB Model Name : {selectedSearch[data]}</p>
                      if (data === 'SerialNumber')
                        return <p>Serial Number : {selectedSearch[data]}</p>
                      if (data === 'Manufacturer')
                        return <p>MB Manufacturer : {selectedSearch[data]}</p>
                      if (data === 'Name')
                        return <p>Host Name : {selectedSearch[data]}</p>
                      else
                        return <p>{data} : {selectedSearch[data]}</p>
                    })()
                  }
                  <i
                    className="fa fa-times"
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                    onClick={() => this.removeItem(data, selectedSearch[data])}
                  ></i>
                </div>
              )}
            </div>

          </div>
        ) : (
            <div></div>
          )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    host: state.hostReducer,
    task: state.taskReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove_search_item: (data) => {
      dispatch({
        type: REMOVE_SEARCH_ITEM,
        payload: {
          search: {
            data,
          }
        }
      });
      return Promise.resolve();
    },
    clean_service_status: () => {
      dispatch({
        type: CLEAN_SERVICE_STATUS,
      })
    },
    clean_host_status: () => {
      dispatch({
        type: CLEAN_HOST_STATUS,
      })
    },
    clean_host_type: () => {
      dispatch({
        type: CLEAN_HOST_TYPE,
      })
    },
    host_clearRows: () => {
      dispatch({
        type: HOST_CLEAR_SELECTION,
      });
    },

    host_selectRows: (rows) => {
      dispatch({
        type: HOST_ROW_SELECT,
        payload: {
          rows,
        },
      });
    },
    searchAction: (key, value) => {
      dispatch({
        type: SEARCH_ACTION,
        payload: {
          search: {
            key,
            value,
          },
        },
      });
      return Promise.resolve();
    },
  };
};

// export default FilterBox;
export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)