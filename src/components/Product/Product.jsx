import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // const { productId } = useParams();
  const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   if (!productId) return;

  //   if (productId !== product.id) {
  //     dispatch(addToCart(product));
  //   }
  //   dispatch(increaseProductCount(product));
  // };

  return (
    <li>
      <p>{product.title}</p>
      <Link to={`/product/${product.id.toString()}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <p>{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </li>
  );
};

export default Product;
