import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// components
import ItemModel from "../ItemModel";
import { mainStore } from "../../context/MainContext";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Item = ({
  id,
  imgUrl,
  name,
  description,
  price,
  stock,
  category_name,
}) => {
  const [openModel, setOpenModel] = useState(false);
  const [isWish, setIsWish] = useState(false);

  const {
    BASE_URL,
    cartEndPoint,
    wishListEndPoint,
    token,
    cart,
    wishList,
    saveCartItems,
    saveWishListItems,
  } = useContext(mainStore);

  useEffect(() => {
    const inWishlist = wishList.some((item) => item.id === id);
    setIsWish(inWishlist);
  }, [wishList, id]);

  const handleAddToCart = async (e) => {
    e.stopPropagation();

    const existIndex = cart.findIndex((item) => item.id === id);

    let updatedCart;
    if (existIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existIndex] = {
        ...updatedCart[existIndex],
        quantity: updatedCart[existIndex].quantity + 1,
      };
    } else {
      const product = { id, imgUrl, name, price, category_name, quantity: 1 };
      updatedCart = [...cart, product];
    }

    const cartId = localStorage.getItem("cartId");

    saveCartItems(updatedCart);

    try {
      await axios.put(
        `${BASE_URL}${cartEndPoint}/${cartId}`,
        { data: { items: updatedCart } },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success(`${name} added to cart!`);
    } catch (error) {
      toast.error("Failed to update cart");
    }
  };

  const handleToggleWishList = async (e) => {
    e.stopPropagation();

    const wishListId = localStorage.getItem("wishListId");

    let updatedWishList;
    if (isWish) {
      updatedWishList = wishList.filter((item) => item.id !== id);
    } else {
      const product = { id, imgUrl, name, price, category_name };
      updatedWishList = [...wishList, product];
    }

    saveWishListItems(updatedWishList);

    try {
      await axios.put(
        `${BASE_URL}${wishListEndPoint}/${wishListId}`,
        { data: { items: updatedWishList } },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      toast.success(
        isWish
          ? `${name} removed from wishlist!`
          : `${name} added to wishlist!`,
      );
    } catch (error) {
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <>
      <div
        onClick={() => setOpenModel(true)}
        className="group p-4 flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
      >
        {/* Product Image */}
        <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
          <img
            src={imgUrl}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col grow justify-between">
          <div>
            <div className="flex justify-between items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-800 text-base truncate grow">
                {name}
              </h3>
              {category_name && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md shrink-0 capitalize">
                  {category_name}
                </span>
              )}
            </div>

            <p className="font-bold text-green-600 text-lg mb-3">
              ${price ? Number(price).toFixed(2) : "0.00"}
            </p>
          </div>

          <div className="flex gap-4">
            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={stock <= 0}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              {stock > 0 ? "Add To Cart" : "Out of Stock"}
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={handleToggleWishList}
              className="p-2.5 rounded-full text-green-700 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Wishlist"
            >
              {isWish ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModel && (
        <ItemModel
          id={id}
          imgUrl={imgUrl}
          name={name}
          description={description}
          price={price}
          stock={stock}
          category_name={category_name}
          setOpenModel={setOpenModel}
        />
      )}
    </>
  );
};

export default Item;
