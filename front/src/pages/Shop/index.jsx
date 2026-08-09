import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

// components
import ShopSideBar from "../../components/SideShopBar";
import Loading from "../../components/Loading";
import Item from "../../components/Item";
import { mainStore } from "../../context/MainContext";

const Shop = () => {
  const { token, selectedCategory, filteredProducts } = useContext(mainStore);

  return (
    <div className="grow py-6 flex">
      <div className="grow container mx-auto px-4 flex flex-col md:flex-row gap-6">
        {token ? (
          <>
            {/* side bar */}
            <ShopSideBar />

            {/* main */}
            <div className="grow">
              {/* Loader */}
              {filteredProducts.length > 0 ? (
                // products
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => {
                    const id = product.documentId || product.id;
                    return (
                      <Item
                        key={id}
                        id={id}
                        imgUrl={product.imgUrl}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        stock={product.stock}
                        category_name={product.category_name}
                      />
                    );
                  })}
                </div>
              ) : (
                /* Empty state when no products match */
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
          /* Unauthenticated State View */
          <div className="grow py-16 flex flex-col justify-center items-center gap-6 text-center">
            <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">
              You must have an account to view the shop
            </h2>
            <p className="text-gray-500 max-w-md">
              Please log in or register a new account to browse our full catalog
              of fresh products.
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-xl text-white font-bold bg-green-500 hover:bg-green-600 transition-colors shadow-sm cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 rounded-xl text-white font-bold bg-green-500 hover:bg-green-600 transition-colors shadow-sm cursor-pointer"
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
