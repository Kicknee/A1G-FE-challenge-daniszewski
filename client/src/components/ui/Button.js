import React from "react";

const Button = ({ onClick, disabled = false, children }) => {
  return (
    <button
      className="btn btn-primary w-100 mt-2 mb-3 py-1 lh-lg fs-5 shadow"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
