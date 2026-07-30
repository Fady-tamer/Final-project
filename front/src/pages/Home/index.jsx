// components
import Hero from "../../sections/Hero";
import Categories from "../../sections/Catrgories";
import Products from "../../sections/Products";

const Home = ({ setSelectedCategory }) => {
  return (
    <div className="grow py-4">
      <div className="container">
        <Hero />
        <Categories setSelectedCategory={setSelectedCategory} />
        {/* <Products /> */}
      </div>
    </div>
  );
};

export default Home;
