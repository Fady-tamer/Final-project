import { useContext } from "react";

// context
import { mainStore } from "../../context/MainContext";

// components
import ProductCard from "../../components/Cards/ProductCard";

const Wishlist = () => {
  const { wishList } = useContext(mainStore);

  return (
    <div className="grow min-h-[56dvh] px-4 lg:px-0 py-4">
      <div className="grow container px-4 lg:px-0">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Wishlist</h1>

        {wishList && wishList.length > 0 ? (
          <div
            className={`pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4`}
          >
            {wishList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="p-4 flex justify-center items-center rounded-2xl bg-white">
            <p className="text-gray-500">Your wishlist is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
