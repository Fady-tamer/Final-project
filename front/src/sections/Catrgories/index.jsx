import React, { useEffect, useState } from "react";
import { Link } from "react-router";

// icons
import { FaArrowRightLong } from "react-icons/fa6";

// components
import CategoryItem from "../../components/CategoryItem";
import Loading from "../../components/Loading";

const Categories = ({ setSelectedCategory }) => {
  const baseUrl = "http://localhost:1337/api/";
  const endPoint = "categories";

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLodaing] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const promise = await fetch(baseUrl + endPoint);
      const data = await promise.json();

      setCategories(data.data);
      setIsLodaing(false);
    };
    fetchCategories();
  }, []);

  return (
    <div className="py-4">
      <div className="py-4 flex justify-between items-center">
        <p className="text-4xl font-bold">Categories</p>
        <Link
          to={"/shop"}
          className="flex items-center gap-4 text-green-500 font-semibold"
        >
          <p>View All</p>
          <FaArrowRightLong />
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-6 gap-4">
          {categories.map(({ documentId, name, imgUrl }) => {
            return (
              <CategoryItem
                key={documentId}
                documentId={documentId}
                name={name}
                imgUrl={imgUrl}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
