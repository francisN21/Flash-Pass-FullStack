import React from "react";

const PasswordHolder = (props) => {
  return (
    <textarea
      type="text"
      className="password-holder"
      value={props.value}
    ></textarea>
  );
};

export default PasswordHolder;
