import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("/api/storage");
  return data;
};
