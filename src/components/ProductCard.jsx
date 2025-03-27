const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-md p-4">
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-gray-700">{`${product.price} €`}</p>
    </div>
  );
};

export default ProductCard;
