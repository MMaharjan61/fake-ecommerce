import { addToCart, removeFromCart } from "../utils/storage";

const ProductCard = ({ product, cart, setCart }) => {
  const productInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="card shadow-md p-4 w-full h-80 bg-white">
      <figure className="w-full h-64 flex items-center justify-center">
        <img
          className="object-contain w-full h-full"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="title mt-2">
        <h3 className="font-bold">{product.title}</h3>
      </div>
      <div className="price mt-2">
        <p className="text-gray-700">{`${product.price} €`}</p>
      </div>
      <div className="card-actions justify-end">
        {productInCart ? (
          <div>
            <button
              className="btn btn-soft"
              onClick={() => removeFromCart(product.id, cart, setCart)}
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            className="btn btn-soft"
            onClick={() => addToCart(product, cart, setCart)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
