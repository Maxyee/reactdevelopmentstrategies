import React from 'react';


function Mobile(props) {
  return (
    <div>
        <h2>Hello Mobile (Mobile component)</h2>

        <h4>(name props object) Mobile name : {props.resource.name}</h4>

        <h5>(model props object)Mobile model: {props.resource.model}</h5>
    </div>
  );
}

export default Mobile;