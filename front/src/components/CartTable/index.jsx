import { useContext } from "react";
import { mainStore } from "../../context/MainContext";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const CartTable = () => {
  const { BASE_URL, cartEndPoint, token, cart, saveCartItems } =
    useContext(mainStore);

  const handleDelete = async (name, index) => {
    const cartId = localStorage.getItem("cartId");

    const updatedCart = cart.filter((_, i) => i !== index);

    saveCartItems(updatedCart);

    await axios.put(
      `${BASE_URL}${cartEndPoint}/${cartId}`,
      { data: { items: updatedCart } },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    toast.success(`${name} deleted`);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="w-full p-8 border border-[#eee] rounded-2xl bg-white text-center text-gray-500 shadow-sm">
        Your cart is currently empty.
      </div>
    );
  }

  return (
    <div className="w-full h-fit border border-[#eee] rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="w-full max-w-full overflow-x-auto">
        <table className="w-full min-w-125 text-left border-collapse">
          <thead>
            <tr className="text-green-500 border-b border-[#eee]">
              <th className="p-4">Item</th>
              <th className="p-4 text-center">Quantity</th>
              <th className="p-4 text-center">Unit Price</th>
              <th className="p-4 text-center">Total</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ id, imgUrl, name, price, quantity }, index) => {
              return (
                <tr key={id} className="border-b border-[#eee] last:border-0">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={imgUrl}
                      alt={name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <p className="font-semibold">{name}</p>
                  </td>

                  <td className="p-4 text-center font-semibold">{quantity}</td>

                  <td className="p-4 text-center font-semibold text-[#aaa]">
                    {Number(price).toFixed(2)}
                  </td>

                  <td className="p-4 text-center font-semibold">
                    {Number(quantity * price).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <FaTrash
                      onClick={() => {
                        handleDelete(name, index);
                      }}
                      className="mx-auto text-2xl text-red-500 cursor-pointer"
                    />
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
