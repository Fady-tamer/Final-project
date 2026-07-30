import React, { useState, useEffect } from "react";
import Loading from "../Loading";

const ShopSideBar = ({ setSelectedCategory }) => {
  const baseUrl = "http://localhost:1337/api/";
  const endPoint = "categories";

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const promise = await fetch(baseUrl + endPoint);
      const data = await promise.json();
      setCategories(data.data);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-w-50 p-4 rounded-2xl bg-gray-200 flex flex-col gap-2">
      <h3 className="font-bold text-lg mb-4 border-b border-gray-300 pb-2">
        Categories
      </h3>
      <button
        onClick={() => setSelectedCategory("all")}
        className="text-left text-gray-700 hover:text-green-500 transition-all cursor-pointer"
      >
        All Products
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        categories.map(({ documentId, name }) => (
          <button
            key={documentId}
            onClick={() => setSelectedCategory(name)}
            className="text-left text-gray-700 hover:text-green-500 cursor-pointer"
          >
            {name}
          </button>
        ))
      )}
    </div>
  );
};

export default ShopSideBar;
