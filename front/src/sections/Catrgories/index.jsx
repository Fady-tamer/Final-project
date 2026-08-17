import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

// icons
import { FaArrowRightLong } from "react-icons/fa6";

// components
import CategoryItem from "../../components/Category";

// context
import { mainStore } from "../../context/MainContext";

const Categories = () => {
  const { categories } = useContext(mainStore);

  return (
    <div className="py-4">
      {/* Header */}
      <div className="mb-4 p-4 flex justify-between items-center">
        <p className="text-3xl font-bold">Categories</p>

        <Link
          to="/shop"
          className="flex items-center gap-2 text-green-500 font-semibold transition-all"
        >
          <span>View All</span>
          <FaArrowRightLong className="hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* categories */}
      {
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ documentId, name, imgUrl }) => (
            <CategoryItem
              key={documentId}
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
