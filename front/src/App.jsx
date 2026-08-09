import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// layouts
import MainLayout from "./layouts/mainLayout";

// components
import Home from "./pages/Home";
import Shop from "./pages/Shop";

// auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ErrorPage from "./pages/Error";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="shop" element={<Shop />} />
            <Route path="shoppingCart" element={<Cart />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
