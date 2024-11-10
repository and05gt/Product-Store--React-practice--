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
    <div className="bg-white">
      <h2 className="text-2xl text-center font-bold tracking-tight text-gray">
        Cart
      </h2>
      {cart.length > 0 && (
        <p className="text-xl text-gray font-medium pl-8">
          Total Amount: {totalAmount}$
        </p>
      )}
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between px-16 shadow-md"
            >
              <img src={item.thumbnail} alt={item.title} />
              <div className="flex flex-col items-start gap-4">
                <p className="text-2xl">{item.title}</p>
                <p className="text-xl font-bold">{item.price}$</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="text-center bg-gray w-6 h-6 rounded text-white"
                  onClick={
                    item.count > 1
                      ? () => dispatch(decreaseProductCount(item))
                      : () => dispatch(removeFromCart(item))
                  }
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="text-center bg-gray w-6 h-6 rounded text-white"
                  onClick={() => dispatch(increaseProductCount(item))}
                >
                  +
                </button>
              </div>
              <button
                className="text-white bg-red-600 rounded w-24 p-2 hover:bg-red-500"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-xl pl-8">Cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
