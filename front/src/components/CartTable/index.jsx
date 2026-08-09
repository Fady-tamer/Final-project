import { useContext, useEffect } from "react";
import { mainStore } from "../../context/MainContext";
import axios from "axios";

const CartTable = () => {
  const { BASE_URL, currentCart } = useContext(mainStore);
  const endPoint = "/api/products";

  // const fallbackImg = "https://via.placeholder.com/100?text=No+Image";

  // const fetchProducts = async () => {
  //   const response = await axios.get(`${BASE_URL}${endPoint}`);
  //   const data = response.data?.data || [];
  // };

  // useEffect(fetchProducts, []);

  if (currentCart.length === 0) {
    return (
      <div className="w-full border border-[#eee] rounded-2xl p-8 text-center flex flex-col justify-center items-center gap-3 bg-white">
        <p className="text-xl font-bold text-gray-800">Your cart is empty</p>
        <p className="text-sm text-gray-500">
          Add items to your cart to review them here.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-fit border border-[#eee] rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* w-full max-w-full isolates the table scroll within this wrapper */}
      <div className="w-full max-w-full overflow-x-auto">
        <table className="w-full min-w-125 text-left border-collapse">
          <thead>
            <tr className="border-b border-[#eee] bg-gray-50 text-xs sm:text-sm">
              <th className="p-3 sm:p-4 text-gray-500 font-medium">Product</th>
              <th className="p-3 sm:p-4 text-gray-500 font-medium">Price</th>
              <th className="p-3 sm:p-4 text-gray-500 font-medium">Quantity</th>
              <th className="p-3 sm:p-4 text-gray-500 font-medium">Subtotal</th>
              <th className="p-3 sm:p-4 text-gray-500 font-medium text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eee]">
            {currentCart.map((item) => {
              const { id, imgUrl, name, price, quantity } = item;
              const numericPrice = Number(price) || 0;
              const itemSubtotal = numericPrice * quantity;

              return (
                <tr key={id} className="hover:bg-gray-50/50 transition-colors">
                  {/* Product Name & Image */}
                  <td className="p-3 sm:p-4 flex gap-3 items-center">
                    <img
                      src={imgUrl}
                      alt={name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImg;
                      }}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-xl border border-gray-100 bg-gray-50 shrink-0"
                    />
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm max-w-30 sm:max-w-none truncate sm:whitespace-normal">
                      {name}
                    </p>
                  </td>

                  {/* Unit Price */}
                  <td className="p-3 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                    ${numericPrice.toFixed(2)}
                  </td>

                  {/* Quantity Controls */}
                  <td className="p-3 sm:p-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 p-1 rounded-full border border-gray-300">
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, quantity - 1)}
                        disabled={quantity <= 1}
                        className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-base font-bold bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        aria-label={`Decrease quantity of ${name}`}
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-xs sm:text-sm font-semibold select-none">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, quantity + 1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-base font-bold bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label={`Increase quantity of ${name}`}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Line Item Subtotal */}
                  <td className="p-3 sm:p-4 font-semibold text-green-600 text-xs sm:text-sm whitespace-nowrap">
                    ${itemSubtotal.toFixed(2)}
                  </td>

                  {/* Remove Action */}
                  <td className="p-3 sm:p-4 text-center whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => removeItem(id)}
                      className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                      aria-label={`Remove ${name} from cart`}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
