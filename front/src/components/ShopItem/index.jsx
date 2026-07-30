import { useState } from "react";
import ShopItemModel from "../../components/ShopItemModel";

const ShopItem = ({
  id,
  imgUrl,
  name,
  description,
  price,
  stock,
  category_name,
}) => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div
      onClick={() => {
        setOpenModel(!openModel);
      }}
      className="max-h-150 p-4 flex flex-col rounded-2xl shadow-2xl cursor-pointer"
    >
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-55 rounded-2xl object-cover object-center bg-gray-200"
      />
      <div className="pt-4 grow">
        <div className="flex justify-between">
          <p className="w-[50%] text-left font-bold text-green-500 text-nowrap overflow-hidden text-ellipsis">
            {name}
          </p>
          <p className="w-[50%] text-right font-bold text-nowrap overflow-hidden text-ellipsis">
            {category_name}
          </p>
        </div>
        <p className="py-2 font-bold text-green-500">${price}</p>
        <button className="w-full p-2 rounded-xl text-white bg-green-500 cursor-pointer">
          Add To Cart
        </button>
      </div>
      {openModel && (
        <ShopItemModel
          imgUrl={imgUrl}
          name={name}
          description={description}
          price={price}
          stock={stock}
          category_name={category_name}
          setOpenModel={setOpenModel}
        />
      )}
    </div>
  );
};

export default ShopItem;
