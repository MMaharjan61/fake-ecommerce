export const getCartFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

export const addToCart = (product, cart, setCart) => {
  const updatedCart = [...cart];
  const index = updatedCart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    updatedCart[index].quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
};

export const removeFromCart = (productId, cart, setCart) => {
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
};

export const increaseQuantity = (productId, cart, setCart) => {
  const updatedCart = cart.map((item) =>
    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
};

export const decreaseQuantity = (productId, cart, setCart) => {
  const updatedCart = cart.map((item) =>
    item.id === productId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
};
