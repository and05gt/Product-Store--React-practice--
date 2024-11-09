import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../motion/motion";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    // <li>
    //   <p>{product.title}</p>
    //   <Link to={`/product/${product.id.toString()}`}>
    //     <img src={product.thumbnail} alt={product.title} />
    //   </Link>
    //   <p>{product.price}</p>
    //   <button onClick={handleAddToCart}>Add to cart</button>
    // </li>

    // <li>
    //   <div className="card card-compact bg-base-100 w-96 shadow-xl">
    //     <figure>
    //       <Link to={`/product/${product.id.toString()}`}>
    //         <img src={product.thumbnail} alt={product.title} />
    //       </Link>
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{product.title}</h2>
    //       <p>{product.description}</p>
    //       <p>{product.price} $</p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary" onClick={handleAddToCart}>
    //           Add to cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </li>

    <div className="group relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight()}
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-orange group-[:nth-child(even)]:bg-white group-[:nth-child(4n+3)]:bg-violet group-[:nth-of-type(3)]:bg-violet lg:aspect-none group-hover:opacity-75 lg:h-80"
      >
        <Link to={`/product/${product.id.toString()}`}>
          <img
            alt={product.title}
            src={product.thumbnail}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft()}
        className="mt-4 flex justify-between"
      >
        <div>
          <h3 className="text-sm text-gray">
            {/* <span aria-hidden="true" className=" " /> */}
            {product.title}
          </h3>
          <p className="mt-5 text-sm font-medium text-gray">
            {product.price} $
          </p>
        </div>

        <button
          type="submit"
          className="absolute right-0 bottom-0 inline-flex items-center justify-center rounded-md border-0 bg-orange px-3 py-1.5 text-sm leading-6 font-medium text-white hover:bg-beige hover:text-orange focus:outline-none focus:ring-2 focus:ring-beige"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </motion.div>
    </div>
  );
};

export default Product;
