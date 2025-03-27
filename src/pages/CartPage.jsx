import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  updateCart,
  removeFromCart,
} from "../utils/storage";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);

  const handleRemove = (product) => {
    removeFromCart(product);
    setCart(getCartFromLocalStorage());
  };

  const handleUpdateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      handleRemove(product);
    } else {
      updateCart(product, quantity);
      setCart(getCartFromLocalStorage());
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <CartItem
              key={product.id}
              product={product}
              quantity={quantity}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h3 className="text-xl">Total Amount: {totalAmount.toFixed(2)} €</h3>
      </div>
    </div>
  );
};

export default CartPage;
