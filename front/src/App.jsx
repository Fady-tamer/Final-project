import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// layouts
import MainLayout from "./layouts/mainLayout";

// components
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ErrorPage from "./pages/Error";

// auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="shoppingCart" element={<Cart />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="shop" element={<Shop />} />

            <Route path="*" element={<ErrorPage />} />

            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
