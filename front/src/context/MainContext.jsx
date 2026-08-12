import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const mainStore = createContext();

const MainContext = ({ children }) => {
  const BASE_URL = "http://localhost:1337";
  const categoriesEndPoint = "/api/categories";
  const productsEndPoint = "/api/products";
  const cartEndPoint = "/api/carts";
  const wishListEndPoint = "/api/wishlists";

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
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
  const [quantity, setQuantity] = useState(1);

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
        setTimeout(() => setIsInitialLoading(false), 2000);
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

  const saveUserId = (userId) => {
    localStorage.setItem("userId", userId);
    setUserId(userId);
  };

  const saveCartId = (cartId) => {
    localStorage.setItem("cartId", cartId);
    setCartId(cartId);
  };

  const saveCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCart(cartItems);
  };

  const saveWishListId = (wishListId) => {
    localStorage.setItem("wishListId", wishListId);
    setWishListId(wishListId);
  };

  const saveWishListItems = (WishListItems) => {
    localStorage.setItem("WishListItems", JSON.stringify(WishListItems));
    setWishList(WishListItems);
  };

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    setQuantity(quantity - 1);
  };

  const logoutFn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("cartId");
    localStorage.removeItem("cartItems");
    setToken(null);
  };

  const contextValue = {
    BASE_URL,
    categoriesEndPoint,
    productsEndPoint,
    cartEndPoint,
    wishListEndPoint,
    token,
    userId,
    cartId,
    wishListId,
    selectedCategory,
    quantity,
    categories,
    filteredProducts,
    isInitialLoading,
    cart,
    wishList,
    setSelectedCategory,
    setQuantity,
    setIsInitialLoading,
    saveToken,
    saveUserId,
    saveCartId,
    saveWishListId,
    saveCartItems,
    saveWishListItems,
    incQuantity,
    decQuantity,
    logoutFn,
  };

  return (
    <mainStore.Provider value={contextValue}>{children}</mainStore.Provider>
  );
};

export default MainContext;
