import { FaRegHeart } from "react-icons/fa";

const ShopItemModel = ({
  id,
  imgUrl,
  name,
  description,
  price,
  stock,
  category_name,
  setOpenModel,
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setOpenModel(false);
      }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#111111b5] z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative min-w-[60%] p-4 flex gap-10 rounded-2xl bg-white"
      >
        <button
          onClick={() => setOpenModel(false)}
          className="absolute top-4 right-6 text-2xl font-bold text-gray-400 hover:text-red-500 cursor-pointer"
        >
          ✕
        </button>

        <img
          src={imgUrl}
          alt={name}
          className="rounded-2xl max-w-75 object-cover"
        />

        <div className="grow mt-12">
          <div className="pb-4 border-b border-gray-300">
            <div className="flex justify-between items-center">
              <p className="text-4xl font-bold">{name}</p>
              <p className="px-4 py-2 text-xl font-bold rounded-2xl text-green-800 bg-green-300">
                {stock} in stock
              </p>
            </div>
            <p className="text-green-500 text-xl font-semibold">$ {price}</p>
          </div>
          <p className="py-4 text-gray-400">{description}</p>
          <div className="py-4 flex items-center gap-4 border-t border-b border-gray-300">
            <div className="w-fit p-2 flex gap-4 rounded-4xl border border-gray-300">
              <p className="w-8 rounded-full text-2xl text-center bg-gray-200 cursor-pointer">
                -
              </p>
              <p className="w-8 rounded-full text-2xl text-center">0</p>
              <p className="w-8 rounded-full text-2xl text-center bg-gray-200 cursor-pointer">
                +
              </p>
            </div>
            <button className="grow py-3 rounded-4xl text-white font-bold bg-green-500 cursor-pointer">
              Add To Cart
            </button>
            <FaRegHeart className="w-12 h-12 p-3 rounded-full text-green-800 bg-green-300 cursor-pointer" />
          </div>
          <div className="py-4 flex gap-4">
            <p className="font-semibold">Category:</p>
            <p className="text-gray-400">{category_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemModel;
