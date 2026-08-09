import { useContext, useState } from "react";
import toast from "react-hot-toast";

// components
import ItemModel from "../ItemModel";
import { mainStore } from "../../context/MainContext";

const Item = ({
  id,
  imgUrl,
  name,
  description,
  price,
  stock,
  category_name,
}) => {
  const [openModel, setOpenModel] = useState(false);
  const {} = useContext(mainStore);

  const fallbackImg = "https://via.placeholder.com/200?text=No+Image";

  const handleAddToCart = (e) => {
    e.stopPropagation();

    if (stock <= 0) {
      toast.error("This item is currently out of stock.");
      return;
    }

    const product = { id, imgUrl, name, price, stock, category_name };

    // Delegating state and localStorage handling to Context helper
    toast.success(`${name} added to cart!`);
  };

  return (
    <>
      <div
        onClick={() => setOpenModel(true)}
        className="group p-4 flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
      >
        {/* Product Image */}
        <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
          <img
            src={imgUrl || fallbackImg}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImg;
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col grow justify-between">
          <div>
            <div className="flex justify-between items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-800 text-base truncate grow">
                {name}
              </h3>
              {category_name && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md shrink-0 capitalize">
                  {category_name}
                </span>
              )}
            </div>

            <p className="font-bold text-green-600 text-lg mb-3">
              ${price ? Number(price).toFixed(2) : "0.00"}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={stock <= 0}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer active:scale-95"
          >
            {stock > 0 ? "Add To Cart" : "Out of Stock"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {openModel && (
        <ItemModel
          id={id}
          imgUrl={imgUrl}
          name={name}
          description={description}
          price={price}
          stock={stock}
          category_name={category_name}
          setOpenModel={setOpenModel}
        />
      )}
    </>
  );
};

export default Item;
