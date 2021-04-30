import React from "react";

const Error = (props) => {
  return (
    <div className="ui placeholder segment">
      <div className="ui icon header">
        <i className="ban icon" />
        <div className="inline">{props.errorMessage}</div>
      </div>
    </div>
  );
};

export default Error;
