import { useContext } from "react";
import CartTable from "./components/CartTable";
import OrderSummery from "./components/OrderSummery";

// components

const Cart = () => {
  return (
    <main className="grow min-h-[56dvh] px-4 lg:px-0 py-4">
      <div className="container px-4 lg:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          My Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <CartTable />
          <OrderSummery />
        </div>
      </div>
    </main>
  );
};

export default Cart;
