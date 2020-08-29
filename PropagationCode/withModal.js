import React from 'react';


const withModal = (WrappedComponent) => {
  class WithModal extends React.Component {
    onClick(e) {
      e.stopPropagation();
    }

    render() {
      return (
        <div onClick={this.onClick.bind(this)}>
          <WrappedComponent />
        </div>
      )
    }
  }
  return WithModal
}

export default withModal;