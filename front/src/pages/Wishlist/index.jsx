import { useContext } from "react";

// context
import { mainStore } from "../../context/MainContext";

// components
import Item from "../../components/Item";
import { div } from "framer-motion/client";

const Wishlist = () => {
  const { wishList } = useContext(mainStore);

  return (
    <div className="grow min-h-[75dvh] px-4 lg:px-0 py-4">
      <div className="container px-4 lg:px-0">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Wishlist</h1>

        {wishList && wishList.length > 0 ? (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {wishList.map(
              ({
                id,
                imgUrl,
                name,
                description,
                price,
                category_name,
                stock,
              }) => (
                <Item
                  key={id}
                  id={id}
                  imgUrl={imgUrl}
                  name={name}
                  description={description}
                  price={price}
                  stock={stock}
                  category_name={category_name}
                />
              ),
            )}
          </div>
        ) : (
          <p className="text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
