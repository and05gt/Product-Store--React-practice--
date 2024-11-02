import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li>
      <p>{product.title}</p>
      <Link to={`/product/${product.id.toString()}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
};

export default Product;
