const CardContainer = ({ children }) => {
  return (
    <div className="card order-card rounded-5 shadow-lg d-flex flex-column justify-content-between">
      {children}
    </div>
  );
};

export default CardContainer;
