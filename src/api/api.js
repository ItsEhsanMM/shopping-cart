import axios from "axios";

const Base = "https://fakestoreapi.com";

const fetchProducts = async () => {
  const products = await axios.get(`${Base}/products`);
  return products;
};

export { fetchProducts };
