let localURL = "http://localhost:5000/";
let prodURL = "https://apfac.netlify.app/";

let baseUrl = process.env.NODE_ENV === "production" ? prodURL : localURL;

const ProductDefinition = ({ product }) => {
  return (
    <button
      className="snipcart-add-item product-definition"
      data-item-id={product.id}
      data-item-name={product.name}
      data-item-price={product.price}
      data-item-image={product.image}
      data-item-custom2-options="4x6|6x9[+7.50]|9x12[+15.00]|20x20[+40.00]"
      data-item-custom2-name="size"
      data-item-url="https://snipcart-nextjs-seo.netlify.com/"
    >
      Add to cart ${product.price}
    </button>
  );
};

export default ProductDefinition;
