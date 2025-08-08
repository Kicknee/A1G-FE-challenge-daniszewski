const ProductInfo = ({ name, price }) => {
  return (
    <div className="d-flex flex-column">
      <span
        className="fs-5 fw-semibold"
        style={{
          whiteSpace: "nowrap",
          width: "9ch",
          overflow: "hidden",
        }}
      >
        {name}
      </span>
      <small className="text-muted">${price.toFixed(2)}</small>
    </div>
  );
};

export default ProductInfo;
