import Product from "./Product";

const ProductList = ({products}) => {
  return (
    <div className="products">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
