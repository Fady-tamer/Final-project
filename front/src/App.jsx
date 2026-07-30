import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

// components
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
  const [selectedCaregory, setSelectedCategory] = useState("all");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<Home setSelectedCategory={setSelectedCategory} />}
          />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route
            path="shop"
            element={
              <Shop
                selectedCaregory={selectedCaregory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          ></Route>

          <Route path="aboutUs" element={<About />} />
          <Route path="contactUs" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
