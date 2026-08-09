import { useContext } from "react";
import { mainStore } from "../../context/MainContext";

// components
import Hero from "../../sections/Hero";
import Categories from "../../sections/Catrgories";
import Loading from "../../components/Loading";

const Home = () => {
  const { isInitialLoading } = useContext(mainStore);

  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <div className="grow px-4 lg:px-0 py-4">
      <div className="container">
        <Hero />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
