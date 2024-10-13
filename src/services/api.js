import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchProducts = async () => {
  const { data } = await axios.get("/products");
  return data;
};
