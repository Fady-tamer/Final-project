import { useContext, useEffect } from "react";

// context
import { mainStore } from "../../context/MainContext";

// components
import Hero from "../../sections/Hero";
import Categories from "../../sections/Catrgories";
import Loading from "../../components/Loading";

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
    <div className="grow min-h-[75dvh] px-4 lg:px-0 py-4">
      <div className="container">
        <Hero />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
