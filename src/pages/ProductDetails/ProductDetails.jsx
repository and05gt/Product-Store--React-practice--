import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../motion/motion";

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
      <div className="flex gap-16 p-8 bg-white">
        <div className="flex items-center justify-center bg-orange rounded-lg shadow-md lg:shadow-lg">
          <img src={product.images} alt={product.title} width={480} />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight()}
          className="flex flex-col justify-start gap-4"
        >
          <p className="text-3xl">{product.title}</p>
          <p className="text-xl">Category: {product.category}</p>
          <p className="text-xl">Price: {product.price}$</p>
          <p className="text-xl">
            Rating:{" "}
            {product.rating > 3 ? (
              <span className="text-green-600">{product.rating}</span>
            ) : (
              <span className="text-red-600">{product.rating}</span>
            )}
          </p>
          <div>
            <Link className="text-lg underline text-orange" to="reviews">
              Reviews
            </Link>
          </div>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Outlet />
          </Suspense>
        </motion.div>
      </div>
    </>
  );
};

export default ProductDetails;
