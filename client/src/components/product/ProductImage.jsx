const ProductImage = ({ name }) => {
  return (
    <picture>
      <source srcSet={`images/${name.toLowerCase()}.webp`} type="image/webp" />
      <img
        src={`images/${name.toLowerCase()}.png`}
        alt={name}
        className="img-fluid"
        style={{ width: 63, height: 63 }}
      />
    </picture>
  );
};

export default ProductImage;
