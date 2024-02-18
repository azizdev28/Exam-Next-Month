// index.js in the store directory
import { create } from "zustand";

// Create a Zustand store
const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;
