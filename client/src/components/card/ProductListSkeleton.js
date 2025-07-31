import React from "react";

const ProductListSkeleton = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="row align-items-center py-4 border-bottom placeholder-glow"
      >
        <div className="col-3">
          <div
            className="placeholder rounded"
            style={{ width: 63, height: 63 }}
          />
        </div>
        <div className="col-5 d-flex flex-column gap-2">
          <span className="placeholder col-8" />
          <span className="placeholder col-4" />
        </div>
        <div className="col-4 d-flex gap-1 justify-content-around align-items-center">
          <div
            className="placeholder rounded-circle"
            style={{ width: 42, height: 42 }}
          />
          <div
            className="placeholder rounded-circle"
            style={{ width: 42, height: 42 }}
          />
        </div>
      </div>
    ))}
  </>
);

export default ProductListSkeleton;
