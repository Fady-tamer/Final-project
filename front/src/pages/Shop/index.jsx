import { useEffect, useState } from "react";

// components
import ShopSideBar from "../../components/SideShopBar";
import Loading from "../../components/Loading";
import ShopItem from "../../components/ShopItem";

const Shop = ({ selectedCaregory, setSelectedCategory }) => {
  const baseUrl = "http://localhost:1337/api/";
  const endPoint = "products";

  const [products, setproducts] = useState([]);
  const [isLoading, setIsLodaing] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const promise = await fetch(baseUrl + endPoint);
      const data = await promise.json();

      setproducts(data.data);

      const filter = products.filter(({ category_name }) => {
        if (selectedCaregory === "all") return true;
        return selectedCaregory === category_name;
      });

      setFilterProducts(filter);

      setIsLodaing(false);
    };
    fetchproducts();
  }, [products, selectedCaregory]);

  return (
    <div className="grow py-4 flex">
      <div className="grow container flex gap-4">
        <ShopSideBar setSelectedCategory={setSelectedCategory} />
        <div className="grow">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {filterProducts.map(
                ({
                  documentId,
                  imgUrl,
                  name,
                  description,
                  price,
                  stock,
                  category_name,
                }) => {
                  return (
                    <ShopItem
                      key={documentId}
                      id={documentId}
                      imgUrl={imgUrl}
                      name={name}
                      description={description}
                      price={price}
                      stock={stock}
                      category_name={category_name}
                    />
                  );
                },
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
