import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const getProductById = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [productId]);

  if (!product) return <h2>Loader...</h2>;

  return (
    <>
      <div className="flex bg-white">
        <div className="bg-orange rounded-lg shadow-md lg:shadow-lg">
          <img src={product.images} alt={product.title} width={480} />
        </div>
        <p>{product.title}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}$</p>
        <p>Rating: {product.rating}</p>
      </div>
      <div>
        <Link to="reviews">Reviews</Link>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ProductDetails;
