const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`shadow-top rounded-top-3 ${className}`}>{children}</div>
  );
};

export default CardFooter;
