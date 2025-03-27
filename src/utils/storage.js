export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product) => {
  const cart = getCartFromLocalStorage();
  cart.push({ product, quantity: 1 });
  saveCartToLocalStorage(cart);
};

export const updateCart = (product, quantity) => {
  const cart = getCartFromLocalStorage();
  const itemIndex = cart.findIndex((item) => item.product.id === product.id);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = quantity;
    saveCartToLocalStorage(cart);
  }
};

export const removeFromCart = (product) => {
  let cart = getCartFromLocalStorage();
  cart = cart.filter((item) => item.product.id !== product.id);
  saveCartToLocalStorage(cart);
};
