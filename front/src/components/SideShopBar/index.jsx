import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// context
import { mainStore } from "../../context/MainContext";

const ShopSideBar = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(mainStore);

  const activeCategory = selectedCategory || "all";

  const [isLoading, setIsLoading] = useState(true);

  return (
    <aside className="md:sticky md:top-25 w-full md:w-56 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col gap-1.5 h-fit shrink-0">
      <h3 className="font-bold text-lg mb-2 border-b border-gray-200 pb-2 text-gray-800">
        Categories
      </h3>

      {/* "All Products" Button */}
      <button
        type="button"
        onClick={() => setSelectedCategory && setSelectedCategory("all")}
        className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
          activeCategory === "all" || !activeCategory
            ? "bg-green-500 text-white font-bold shadow-sm"
            : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
        }`}
      >
        All Products
      </button>

      {/* Category List */}
      {categories.map(({ documentId, id, name }) => {
        const isActive = activeCategory.toLowerCase() === name.toLowerCase();

        return (
          <button
            key={documentId}
            type="button"
            onClick={() => setSelectedCategory && setSelectedCategory(name)}
            className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer capitalize ${
              isActive
                ? "bg-green-500 text-white font-bold shadow-sm"
                : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
            }`}
          >
            {name}
          </button>
        );
      })}
    </aside>
  );
};

export default ShopSideBar;
