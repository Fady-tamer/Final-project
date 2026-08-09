import React, { useContext, useState } from "react";
// icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { mainStore } from "../../context/MainContext";
import toast from "react-hot-toast";

const ItemModel = ({
  id,
  imgUrl,
  name,
  description,
  price,
  stock,
  category_name,
  setOpenModel,
}) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { quantity, handleIncrease, handleDecrease } = useContext(mainStore);

  const fallbackImg = "https://via.placeholder.com/400?text=No+Image";

  const handelAddToWishList = () => {
    setIsWishlist(!isWishlist);

    isWishlist
      ? toast.success(`${name} removed from WishList`)
      : toast.success(`${name} added to WishList`);
  };

  const handleAddToCart = () => {
    toast.success(`${name} added to cart`);
    setOpenModel(false);
  };

  return (
    <div
      onClick={() => setOpenModel(false)}
      className="fixed inset-0 w-full h-full flex justify-center items-center bg-black/70 z-50 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-220 p-6 flex flex-col md:flex-row gap-8 rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpenModel(false)}
          className="absolute top-4 right-5 text-2xl font-bold text-gray-400 hover:text-red-500 cursor-pointer transition-colors z-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 max-h-96 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
          <img
            src={imgUrl || fallbackImg}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImg;
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Info */}
        <div className="grow flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {name}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-xl whitespace-nowrap ${
                    stock > 0
                      ? "text-green-800 bg-green-100"
                      : "text-red-800 bg-red-100"
                  }`}
                >
                  {stock > 0 ? `${stock} in stock` : "Out of stock"}
                </span>
              </div>
              <p className="text-green-600 text-2xl font-bold mt-2">
                ${price ? Number(price).toFixed(2) : "0.00"}
              </p>
            </div>

            <p className="py-4 text-gray-500 text-sm leading-relaxed">
              {description || "No description available."}
            </p>
          </div>

          <div>
            {/* Quantity Controls & Add to Cart */}
            <div className="py-4 flex flex-wrap md:flex-nowrap items-center gap-3 border-t border-b border-gray-200">
              {/* Counter */}
              <div className="grow flex items-center gap-2 p-1 rounded-full border border-gray-300">
                <button
                  type="button"
                  onClick={handleDecrease}
                  disabled={quantity <= 1 || stock <= 0}
                  className="grow w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-base font-semibold select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  disabled={quantity >= stock || stock <= 0}
                  className="grow w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={stock <= 0}
                className="grow py-2.5 px-6 rounded-full text-white font-bold bg-green-500 hover:bg-green-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md text-sm"
              >
                {stock > 0 ? "Add To Cart" : "Out of Stock"}
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={handelAddToWishList}
                className="p-2.5 rounded-full text-green-700 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer"
                aria-label="Toggle Wishlist"
              >
                {isWishlist ? (
                  <FaHeart className="w-5 h-5 text-red-500" />
                ) : (
                  <FaRegHeart className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Category Meta */}
            {category_name && (
              <div className="pt-4 flex gap-2 text-sm">
                <span className="font-semibold text-gray-700">Category:</span>
                <span className="text-gray-500 capitalize">
                  {category_name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModel;
