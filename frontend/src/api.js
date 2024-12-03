import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8090" });

export const fetchProducts = () => API.get("/api/products");
export const createProduct = (newProduct) =>
  API.post("/api/products", newProduct);
export const deleteProduct = (id) => API.delete(`/api/products/${id}`);
