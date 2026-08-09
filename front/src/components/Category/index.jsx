import React, { useContext } from "react";
import { Link } from "react-router";
import { mainStore } from "../../context/MainContext";

const CategoryItem = ({ documentId, name, imgUrl }) => {
  const { setSelectedCategory } = useContext(mainStore);

  // Fallback image if image URL is missing or fails
  const fallbackImg = "https://via.placeholder.com/150?text=No+Image";

  return (
    <Link
      to="/shop"
      data-id={documentId}
      onClick={() => setSelectedCategory(name)}
      className="group flex flex-col rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border border-gray-100 hover:-translate-y-1 cursor-pointer"
    >
      <div className="w-full h-36 bg-gray-50 overflow-hidden">
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
      <h3 className="py-3 px-2 text-center text-sm font-bold text-gray-700 group-hover:text-green-600 transition-colors line-clamp-1">
        {name}
      </h3>
    </Link>
  );
};

export default CategoryItem;