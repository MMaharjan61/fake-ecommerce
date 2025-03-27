const CartItem = ({ product, quantity, onRemove, onUpdateQuantity }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{quantity}</td>
      <td>{(product.price * quantity).toFixed(2)} €</td>
      <td>
        <button
          onClick={() => onUpdateQuantity(product, quantity - 1)}
          className="btn btn-sm"
        >
          -
        </button>
        <button
          onClick={() => onUpdateQuantity(product, quantity + 1)}
          className="btn btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onRemove(product)}
          className="btn btn-sm btn-danger"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
