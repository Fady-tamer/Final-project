import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

import categoriesFruit from "../../assets/categoriesFruit.jpg";

const Products = () => {
  return (
    <div className="py-4">
      <div className="py-4 flex justify-between items-center">
        <p className="text-4xl font-bold">Products</p>
        <Link
          to={"/shop"}
          className="flex items-center gap-4 text-green-500 font-semibold"
        >
          <p>View All</p>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 row-span-1 hover:col-span-2 hover:row-span-2 bg-white rounded-xl shadow overflow-hidden duration-300">
          <img src={categoriesFruit} alt="categoriesFruit" className="w-full" />
          <p className="py-2 text-center font-bold">Fruit</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
