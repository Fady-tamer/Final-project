import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const mainStore = createContext();

const MainContext = ({ children }) => {
  const BASE_URL = "http://localhost:1337";
  const categoriesEndPoint = "/api/categories";
  const productsEndPoint = "/api/products";

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);

  // Flags
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setIsInitialLoading(true);
    }
  }, [token]);

  // Load Categories and Products
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const catRes = await axios.get(`${BASE_URL}${categoriesEndPoint}`);
        setCategories(catRes.data?.data || []);

        if (token) {
          const prodRes = await axios.get(`${BASE_URL}${productsEndPoint}`);
          setProducts(prodRes.data?.data || []);
        }
      } catch (error) {
        toast.error("Failed to preload initial data.");
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchInitialData();
  }, [BASE_URL, token]);

  const filteredProducts =
    !selectedCategory || selectedCategory === "all"
      ? products
      : products.filter((item) => item.category_name === selectedCategory);

  const saveToken = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logoutFn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    sessionStorage.removeItem("justLoggedIn");
    setToken(null);
  };

  const contextValue = {
    BASE_URL,
    token,
    saveToken,
    logoutFn,
    selectedCategory,
    setSelectedCategory,
    quantity,
    categories,
    filteredProducts,
    isInitialLoading,
    setIsInitialLoading,
  };

  return (
    <mainStore.Provider value={contextValue}>{children}</mainStore.Provider>
  );
};

export default MainContext;
