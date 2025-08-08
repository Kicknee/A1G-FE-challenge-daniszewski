import Button from "../ui/Button";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductQuantityControls from "./ProductQuantityControls";

const ProductRecord = ({ product, quantity, onChange }) => {
  if (!product) return null;

  const isOut = product.stock === 0;

  return (
    <div
      className={`row justify-content-between align-items-center py-4 border-bottom user-select-none ${
        isOut ? "text-muted opacity-50" : ""
      }`}
    >
      <div className="col-3">
        <ProductImage name={product.name} />
      </div>
      <div className="col-4">
        <ProductInfo name={product.name} price={product.price} />
      </div>
      <div className="col-5">
        <ProductQuantityControls quantity={quantity}>
          <Button
            variant="icon"
            iconClass="bi-dash-lg"
            onClick={() => onChange(product, -1)}
            disabled={isOut || quantity === 0}
            aria-label="Decrease product"
          />
          <Button
            variant="icon"
            iconClass="bi-plus-lg"
            onClick={() => onChange(product, 1)}
            disabled={isOut || quantity >= product.stock}
            aria-label="Increase product"
          />
        </ProductQuantityControls>
      </div>
    </div>
  );
};

export default ProductRecord;
