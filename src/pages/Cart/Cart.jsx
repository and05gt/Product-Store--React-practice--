import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectCart } from "../../redux/cartSlice";
import { useEffect } from "react";
import {
  decreaseProductCount,
  fetchCart,
  increaseProductCount,
  removeFromCart,
} from "../../redux/cartOps";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectAmount);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 && <p>Total Amount: {totalAmount}$</p>}
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.price}</p>
              <div>
                <button
                  onClick={
                    item.count > 1
                      ? () => dispatch(decreaseProductCount(item))
                      : () => dispatch(removeFromCart(item))
                  }
                >
                  -
                </button>
                <span>{item.count}</span>
                <button onClick={() => dispatch(increaseProductCount(item))}>
                  +
                </button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
