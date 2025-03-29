import { useState, useEffect } from "react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/storage";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (total === 0) {
  } else {
  }

  return (
    <div className="p-2 mx-44">
      {total === 0 ? (
        <div>
          <p className="p-2 flex justify-center font-semibold text-xl text-black">
            Your cart is empty!
          </p>
        </div>
      ) : (
        <table className="table mt-2 w-full">
          <thead>
            <tr>
              <th className="text-black text-lg">Product</th>
              <th className="text-black text-lg">Price</th>
              <th className="text-black text-lg">Quantity</th>
              <th className="text-black text-lg">Total</th>
              <th className="text-black text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price} €</td>
                <td>
                  <button
                    className="btn btn-soft btn-circle mx-2"
                    onClick={() => decreaseQuantity(item.id, cart, setCart)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-soft btn-circle mx-2"
                    onClick={() => increaseQuantity(item.id, cart, setCart)}
                  >
                    +
                  </button>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)} €</td>
                <td>
                  <button
                    className="btn btn-soft"
                    onClick={() => removeFromCart(item.id, cart, setCart)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <div className="p-4">
            <button className="btn btn-accent">
              Checkout: {total.toFixed(2)} €
            </button>
          </div>
        </table>
      )}
    </div>
  );
};

export default CartPage;
