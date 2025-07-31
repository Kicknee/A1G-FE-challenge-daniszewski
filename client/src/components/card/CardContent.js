import React from "react";

const CardContent = ({ children, className }) => {
  return <div className={`container h-75 ${className}`}>{children}</div>;
};

export default CardContent;
