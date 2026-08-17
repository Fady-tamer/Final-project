import { useContext } from "react";
import CartTable from "../../components/CartComponents/CartTable";
import Checkout from "../../components/CartComponents/Checkout";

// components

const Cart = () => {
  return (
    <main className="grow min-h-[75dvh] py-4 bg-gray-50/50">
      <div className="container px-4 lg:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          My Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <CartTable />
          <Checkout />
        </div>
      </div>
    </main>
  );
};

export default Cart;
