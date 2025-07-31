import React from "react";

const IconButton = ({ icon, onClick, disabled = false, className = "" }) => {
  return (
    <button
      className={`btn btn-gray rounded-circle d-flex align-items-center justify-content-center ${className}`}
      style={{ width: 42, height: 42 }}
      onClick={onClick}
      disabled={disabled}
    >
      <i className={`bi ${icon}`} />
    </button>
  );
};

export default IconButton;
