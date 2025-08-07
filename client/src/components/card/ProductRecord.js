import React from "react";
import Button from "../ui/Button";

const ProductRecord = ({ product, quantity, onChange }) => {
  const isOut = product.stock === 0;

  return (
    <div
      className={`row justify-content-between align-items-center py-4 border-bottom user-select-none ${
        isOut ? "text-muted opacity-50" : ""
      }`}
    >
      <div className="col-3">
        <picture>
          <source
            srcSet={`images/${product.name.toLowerCase()}.webp`}
            type="image/webp"
          />
          <img
            src={`images/${product.name.toLowerCase()}.png`}
            alt={product.name}
            className="img-fluid"
            style={{ width: 63, height: 63 }}
          />
        </picture>
      </div>
      <div className="col-4 d-flex flex-column">
        <span className="fs-5 fw-semibold">{product.name}</span>
        <small className="text-muted">${product.price.toFixed(2)}</small>
      </div>
      <div className="col-5 d-flex justify-content-around align-items-center gap-2">
        <div className="fs-5 text-end" style={{ width: "3ch" }}>
          {quantity}
        </div>
        <Button
          variant="icon"
          icon="bi-dash-lg"
          onClick={() => onChange(product.name, -1)}
          disabled={isOut || quantity === 0}
        />
        <Button
          variant="icon"
          icon="bi-plus-lg"
          onClick={() => onChange(product.name, 1)}
          disabled={isOut || quantity >= product.stock}
        />
      </div>
    </div>
  );
};

export default ProductRecord;
