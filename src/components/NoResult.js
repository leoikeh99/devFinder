import React from "react";
import errorIcon from "../images/icon-error.svg";

const NoResult = () => {
  return (
    <div className="w-full bg-bg2 rounded-md p-4 flex items-center shadow-input">
      <img className="w-4" src={errorIcon} alt="" />
      <p className="ml-2 text-danger">No result</p>
    </div>
  );
};

export default NoResult;
