import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const mainStore = createContext();

const MainContext = ({ children }) => {
  const BASE_URL = "http://localhost:1337";

  // end points
  const categoriesEndPoint = "/api/categories";
  const productsEndPoint = "/api/products";
  const cartEndPoint = "/api/carts";
  const wishListEndPoint = "/api/wishlists";

  // user data
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || null,
  );
  const [cartId, setCartId] = useState(localStorage.getItem("cartId") || null);
  const [wishListId, setWishListId] = useState(
    localStorage.getItem("wishListId") || null,
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishListItems")) || [],
  );
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Flags
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Load Categories and Products
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const catRes = await axios.get(`${BASE_URL}${categoriesEndPoint}`);
        setCategories(catRes.data?.data || []);

        const prodRes = await axios.get(`${BASE_URL}${productsEndPoint}`);
        setProducts(prodRes.data?.data || []);
      } catch (error) {
        toast.error("Failed to preload initial data.");
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

  const saveUserData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserData(userData);
  };

  const saveCartId = (cartId) => {
    localStorage.setItem("cartId", cartId);
    setCartId(cartId);
  };

  const saveWishListId = (wishListId) => {
    localStorage.setItem("wishListId", wishListId);
    setWishListId(wishListId);
  };

  const saveCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCart(cartItems);
  };

  const saveWishListItems = (WishListItems) => {
    localStorage.setItem("wishListItems", JSON.stringify(WishListItems));
    setWishList(WishListItems);
  };

  const logoutFn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("cartId");
    localStorage.removeItem("wishListId");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("wishListItems");
    setToken(null);
  };

  const contextValue = {
    BASE_URL,
    categoriesEndPoint,
    productsEndPoint,
    cartEndPoint,
    wishListEndPoint,
    token,
    userData,
    cartId,
    wishListId,
    selectedCategory,
    categories,
    filteredProducts,
    isInitialLoading,
    cart,
    wishList,
    setSelectedCategory,
    setIsInitialLoading,
    saveToken,
    saveUserData,
    saveCartId,
    saveWishListId,
    saveCartItems,
    saveWishListItems,
    logoutFn,
  };

  return (
    <mainStore.Provider value={contextValue}>{children}</mainStore.Provider>
  );
};

export default MainContext;
