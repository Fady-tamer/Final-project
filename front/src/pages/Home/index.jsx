import { useContext, useEffect } from "react";

// context
import { mainStore } from "../../context/MainContext";

// components
import Hero from "../../sections/Hero";
import Loading from "../../components/Loading";
import Categories from "../../sections/Categories";
import Products from "../../sections/Products";

const Home = () => {
  const { isInitialLoading, setIsInitialLoading } = useContext(mainStore);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
  }, []);

  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <div className="grow min-h-[56dvh] px-4 lg:px-0 py-4">
      <div className="container">
        <Hero />
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Home;
