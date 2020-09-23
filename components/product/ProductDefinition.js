let localURL = "http://localhost:5000/";
let prodURL = "https://apfac.netlify.app/";

let baseUrl = process.env.NODE_ENV === "production" ? prodURL : localURL;

const ProductDefinition = ({price, id, productName, imageUrl}) => {
  return (
    <button
      className="snipcart-add-item product-definition product__button"
      data-item-id={id}
      data-item-name={productName}
      data-item-price={price}
      data-item-image={imageUrl}
      data-item-custom2-options="4x6|6x9[+7.50]|9x12[+15.00]|20x20[+40.00]"
      data-item-custom2-name="size"
      data-item-url={baseUrl}//"https://snipcart-nextjs-seo.netlify.com/"
    >
      Add to cart
    </button>
  );
};

export default ProductDefinition;
