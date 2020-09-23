import Product from "./Product";

const ProductList = ({ products }) => {
    return (
        <div className="mb-10 sm:mx-6 flex justify-center">
            <div className="col-span-9 mt-8">
                <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-5">
                    {products.map((product, index) => (
                        <Product {...product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;

