import { useState } from "react";
import { addToCart, updateCart, removeFromCart } from "../utils/storage";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      updateCart(product, quantity);
    }
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (quantity === 1) {
        removeFromCart(product);
      } else {
        updateCart(product, quantity - 1);
      }
    }
  };

  return (
    <div className="card shadow-md p-4">
      <div className="title mt-2">
        <h3 className="font-bold">{product.title}</h3>
      </div>
      <div className="price mt-2">
        <p className="text-gray-700">{`${product.price} €`}</p>
      </div>

      {quantity === 0 ? (
        <div className="mt-2">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="mt-2">
          <button onClick={handleRemoveFromCart} className="btn btn-secondary">
            Remove from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
