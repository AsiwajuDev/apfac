import ProductDefinition from "./ProductDefinition";

const Product = ({product}) => {
  return (
    <div className="product">
      <div className="product__information">
        <h2 className="product__title">{product.name}</h2>
        <img
          src={product.image}
          alt="product image"
          className="product__image"
        />
        <p className="product__description">{product.description}</p>
        <ProductDefinition product={product} />
      </div>
      <img
        src={product.image}
        alt="product image"
        className="product__image"
      />
    </div>
  );
};

export default Product;
