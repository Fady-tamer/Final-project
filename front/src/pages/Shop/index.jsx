import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

// components
import ShopSideBar from "../../components/SideShopBar";
import Loading from "../../components/Loading";
import Item from "../../components/Item";

// context
import { mainStore } from "../../context/MainContext";

const Shop = () => {
  const { token, selectedCategory, filteredProducts } = useContext(mainStore);

  return (
    <div className="grow min-h-[75dvh] px-4 lg:px-0 py-4 flex">
      <div className="grow container mx-auto flex flex-col md:flex-row gap-6">
        {token ? (
          <>
            {/* side bar */}
            <ShopSideBar />

            {/* main */}
            <div className="grow">
              {/* Loader */}
              {filteredProducts.length > 0 ? (
                // products
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map(
                    ({
                      id,
                      imgUrl,
                      name,
                      description,
                      price,
                      stock,
                      category_name,
                    }) => {
                      return (
                        <Item
                          key={id}
                          id={id}
                          imgUrl={imgUrl}
                          name={name}
                          description={description}
                          price={price}
                          stock={stock}
                          category_name={category_name}
                        />
                      );
                    },
                  )}
                </div>
              ) : (
                <div className="h-64 flex flex-col justify-center items-center gap-2 text-gray-500">
                  <p className="text-xl font-bold">No products found</p>
                  <p className="text-sm">
                    Try selecting a different category from the sidebar.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Unauthenticated View */
          <div className="grow min-h-[71dvh] flex flex-col justify-center items-center gap-6 rounded-2xl text-center bg-gray-50">
            <h2 className="max-w-120 text-3xl sm:text-4xl text-gray-800 font-bold capitalize">
              You must have an account to view the shop
            </h2>
            <p className="max-w-120 text-gray-500 capitalize">
              Please log in or register a new account to browse our full catalog
              of fresh products.
            </p>
            <div className="w-full max-w-120 p-1 flex gap-4 rounded-2xl">
              <Link
                to="/auth/login"
                className="w-6/12 px-6 py-2.5 rounded-xl text-white font-bold bg-green-500 hover:bg-green-600 transition-colors shadow-sm cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="w-6/12 px-6 py-2.5 rounded-xl text-white font-bold bg-green-500 hover:bg-green-600 transition-colors shadow-sm cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
