export const getCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error(`Something went wrong: ${res.status}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error(`Something went wrong: ${res.status}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
