import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Product from "../../components/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    // <div>
    //   <h2>Products</h2>
    //   <ul>
    //     {products?.map((product) => (
    //       <Product key={product.id} product={product} />
    //     ))}
    //   </ul>
    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 md:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
