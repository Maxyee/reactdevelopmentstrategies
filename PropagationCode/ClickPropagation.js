import React from 'react';

const ClickPropagationRemoveWrapper = ({ children }) => (
  <React.Fragment>
    {React.Children.map(children, child => (
      React.cloneElement(child, {
        onClick: (event) => {
          event.stopPropagation();
        }
      })
    ))}
  </React.Fragment>
);

export default ClickPropagationRemoveWrapper;