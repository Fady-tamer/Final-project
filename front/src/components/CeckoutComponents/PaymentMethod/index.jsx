import { useContext, useRef, useState } from "react";
import { mainStore } from "../../../context/MainContext";

const PaymentMethod = () => {
  const { cart } = useContext(mainStore);

  const [SubTotal, setSubTotal] = useState(0);
  const shippingPrice = 0;

  const isCartEmpty = !cart || cart.length === 0 ? true : false;

  const subTotal = isCartEmpty
    ? 0
    : cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const finalTotal = subTotal + shippingPrice;

  return (
    <div className="md:w-4/12 p-4 pb-2 flex flex-col gap-4 rounded-2xl border border-[#eee] shadow">
      <p className="text-xl font-semibold">Order Summery</p>
      <div className="flex flex-col gap-2">
        {cart.map(({ id, imgUrl, name, quantity, price }) => {
          return (
            <div key={id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={imgUrl}
                  alt={name}
                  className="w-10 h-10 rounded-2xl"
                />
                <p className="font-semibold">{name}</p>
                <p className="font-semibold">x{quantity}</p>
              </div>
              <div>
                <p className="font-semibold">${price * quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <div className="pb-2 flex justify-between items-center border-b border-[#eee]">
          <p>subtotal:</p>
          <p className="font-semibold">${subTotal}</p>
        </div>
        <div className="pb-2 flex justify-between items-center border-b border-[#eee]">
          <p>shipping:</p>
          <p className="font-semibold">
            {shippingPrice == 0 ? "Free" : shippingPrice}
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <p>total:</p>
          <p className="text-xl font-semibold">${finalTotal}</p>
        </div>
      </div>
      <p className="text-xl font-semibold">Payment Method</p>
      <div>
        <form className="flex flex-col gap-2">
          {/* Cash Option */}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              defaultChecked
              className="w-4 h-4 accent-green-500  cursor-pointer"
            />
            <label htmlFor="cash" className="cursor-pointer">
              Cash
            </label>
          </div>

          {/* Card Option */}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              className="w-4 h-4 accent-green-500 cursor-pointer"
            />
            <label htmlFor="card" className="cursor-pointer">
              Visa / Master Card
            </label>
          </div>

          <button
            type="submit"
            className="py-3 mt-2 rounded-2xl text-white font-semibold bg-green-500 hover:bg-green-600 transition-colors"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
