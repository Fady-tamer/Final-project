import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

// icons
import { FaArrowRightLong } from "react-icons/fa6";

// components
import CategoryItem from "../../components/Category";
import { mainStore } from "../../context/MainContext";

const Categories = () => {
  const { categories } = useContext(mainStore);

  return (
    <div className="py-4">
      {/* Header */}
      <div className="py-4 flex justify-between items-center">
        <p className="text-3xl sm:text-4xl font-bold text-gray-800">
          Categories
        </p>
        <Link
          to="/shop"
          className="flex items-center gap-2 sm:gap-4 text-green-500 hover:text-green-600 font-semibold transition-all group"
        >
          <span>View All</span>
          <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Display */}
      {
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ documentId, name, imgUrl }) => (
            <CategoryItem
              key={documentId || name}
              documentId={documentId}
              name={name}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Categories;
