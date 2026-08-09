import React, { useContext } from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaShoppingBag,
} from "react-icons/fa";
import toast from "react-hot-toast";

// context
import { mainStore } from "../../context/MainContext";

const ProductCard = ({ product }) => {
  const { currentCart = [], setCurrentCart } = useContext(mainStore);

  // Destructure product data with fallbacks
  const {
    id,
    documentId,
    name = "Unnamed Product",
    price = 0,
    oldPrice,
    imgUrl,
    rating = 4.5,
    stock = 10,
    category_name,
  } = product || {};

  const productId = documentId || id;
  const fallbackImg = "https://via.placeholder.com/300x300?text=No+Image";

  // Helper to render star rating dynamically
  const renderStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (score >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  // Add to cart handler
  const handleAddToCart = (e) => {
    e.stopPropagation();

    if (stock <= 0) return;

    const addedItem = {
      id: productId,
      name,
      price: Number(price),
      imgUrl,
      quantity: 1,
    };

    const existingIndex = currentCart.findIndex(
      (item) => item.id === productId,
    );
    let newCart;

    if (existingIndex > -1) {
      newCart = currentCart.map((item, idx) =>
        idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      newCart = [...currentCart, addedItem];
    }

    setCurrentCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {oldPrice && oldPrice > price && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
            Sale
          </span>
        )}
        {stock <= 0 && (
          <span className="bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
            Out of Stock
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="w-full h-52 bg-gray-50 overflow-hidden relative">
        <img
          src={imgUrl || fallbackImg}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImg;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col grow justify-between gap-3">
        <div>
          {category_name && (
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">
              {category_name}
            </span>
          )}

          <h3 className="font-bold text-gray-800 text-base line-clamp-1 group-hover:text-green-600 transition-colors">
            {name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex text-xs">{renderStars(rating)}</div>
            <span className="text-xs font-semibold text-gray-500">
              ({rating})
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-green-600">
              ${Number(price).toFixed(2)}
            </span>
            {oldPrice && oldPrice > price && (
              <span className="text-xs text-gray-400 line-through">
                ${Number(oldPrice).toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={stock <= 0}
            className="p-2.5 rounded-xl bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
            title={stock > 0 ? "Add to Cart" : "Out of stock"}
          >
            <FaShoppingBag className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
