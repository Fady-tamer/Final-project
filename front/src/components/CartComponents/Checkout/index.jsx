import { useContext, useState, useEffect } from "react";
import { Link } from "react-router";

// context
import { mainStore } from "../../../context/MainContext";

const Checkout = () => {
  const { cart } = useContext(mainStore);

  const [SubTotal, setSubTotal] = useState(0);
  const shippingPrice = 0;

  const isCartEmpty = !cart || cart.length === 0 ? true : false;

  const subTotal = isCartEmpty
    ? 0
    : cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const finalTotal = subTotal + shippingPrice;

  return (
    <div className="w-full lg:w-80 shrink-0 border border-gray-200 rounded-2xl p-6 bg-white shadow-sm font-sans">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cart Total</h2>

      {/* Subtotal */}
      <div className="flex justify-between items-center py-3 border-b border-gray-100">
        <span className="text-gray-500 text-sm">Subtotal:</span>
        <span className="font-bold text-gray-900 text-sm">${subTotal}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center py-3 border-b border-gray-100">
        <span className="text-gray-500 text-sm">Shipping:</span>
        <span className="font-bold text-gray-900 text-sm">
          {shippingPrice == 0 ? "Free" : shippingPrice}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4 mb-2">
        <span className="text-gray-600 text-base">Total:</span>
        <span className="font-bold text-gray-900 text-lg">${finalTotal}</span>
      </div>

      {/* Action Button */}
      {isCartEmpty ? (
        <button
          type="button"
          disabled
          className="block w-full py-3.5 bg-gray-300 text-white text-center font-bold text-sm rounded-full cursor-not-allowed"
        >
          Proceed to checkout
        </button>
      ) : (
        <Link
          to="/checkout"
          className="block w-full py-3.5 bg-[#00b307] hover:bg-[#009e06] text-white text-center font-bold text-sm rounded-full transition-colors duration-200 shadow-sm active:scale-[0.98]"
        >
          Proceed to checkout
        </Link>
      )}
    </div>
  );
};

export default Checkout;
