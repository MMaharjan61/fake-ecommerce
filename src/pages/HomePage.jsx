import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getCategories, getProducts } from "../api/fakeStoreAPI";
import { getCartFromLocalStorage } from "../utils/storage";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    fetchCategories();
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-2">
      <div className="flex gap-3 mt-2">
        {categories.map((category) => (
          <button key={category} className="btn btn-outline">
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
