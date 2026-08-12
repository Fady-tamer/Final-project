import React, { useContext } from "react";

// components
import CartTable from "../../components/CartTable";
import Checkout from "../../components/Checkout";

const Cart = () => {
  return (
    <main className="grow py-8 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          My Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <CartTable />
          <Checkout />
        </div>
      </div>
    </main>
  );
};

export default Cart;
