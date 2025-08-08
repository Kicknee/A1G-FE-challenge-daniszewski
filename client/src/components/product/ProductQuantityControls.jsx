const ProductQuantityControls = ({ quantity, children }) => {
  return (
    <div className="d-flex justify-content-around align-items-center gap-2">
      <div className="fs-5 text-end" style={{ width: "3ch" }}>
        {quantity}
      </div>
      {children}
    </div>
  );
};

export default ProductQuantityControls;
