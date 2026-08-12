import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";

// icons
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

// validation & context
import { validation } from "./validation";
import { mainStore } from "../../../context/MainContext";

const Login = () => {
  const {
    BASE_URL,
    cartEndPoint,
    wishListEndPoint,
    saveToken,
    setCart,
    saveUserId,
    saveCartId,
    saveCartItems,
    saveWishListId,
    saveWishListItems,
  } = useContext(mainStore);

  const endPoint = "/api/auth/local";

  const navigateTo = useNavigate();
  const [isHidden, setIsHidden] = useState(true);

  const toggelHidden = () => {
    setIsHidden(!isHidden);
  };

  const fetchCart = async (jwt, user_id) => {
    const res = await axios.get(
      `${BASE_URL}${cartEndPoint}?filters[user_id][$eq]=${user_id}`,
      {
        headers: { Authorization: `bearer ${jwt}` },
      },
    );

    const cartId = res.data.data[0].documentId;
    const data = res.data.data[0].items;

    saveCartId(cartId);
    saveCartItems(data);
  };

  const fetchWishList = async (jwt, user_id) => {
    const res = await axios.get(
      `${BASE_URL}${wishListEndPoint}?filters[user_id][$eq]=${user_id}`,
      {
        headers: { Authorization: `bearer ${jwt}` },
      },
    );

    const wishListId = res.data.data[0].documentId;
    const data = res.data.data[0].items;

    saveWishListId(wishListId);
    saveWishListItems(data);
  };

  const submitHandler = async (values) => {
    try {
      const response = await axios.post(`${BASE_URL}${endPoint}`, values);
      const jwt = response.data?.jwt;
      const userId = response.data?.user?.id;

      if (jwt) {
        saveToken(jwt);
        saveUserId(userId);
      }

      fetchCart(jwt, userId);
      fetchWishList(jwt, userId);

      toast.success("Login successful!", { duration: 2000 });
      navigateTo("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error.message ||
        "An unexpected error occurred.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="grow py-12 flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md">
        <Formik
          initialValues={{ identifier: "", password: "" }}
          validationSchema={validation}
          onSubmit={submitHandler}
        >
          <Form className="w-full p-8 flex flex-col rounded-2xl bg-white shadow-xl border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Welcome Back
            </h1>

            {/* Identifier Field */}
            <div className="flex flex-col gap-1 mb-3">
              <Field
                type="text"
                name="identifier"
                placeholder="Email or Username"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
              />
              <div className="text-xs text-red-500 min-h-4 px-1">
                <ErrorMessage name="identifier" />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1 mb-4">
              <div className="relative flex items-center">
                <Field
                  type={isHidden ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={toggelHidden}
                  className="absolute right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {isHidden ? (
                    <FaEye className="text-xl" />
                  ) : (
                    <FaRegEyeSlash className="text-xl" />
                  )}
                </button>
              </div>
              <div className="text-xs text-red-500 min-h-4 px-1">
                <ErrorMessage name="password" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md active:scale-95 cursor-pointer mb-4"
            >
              Login
            </button>

            {/* Footer Switch */}
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium">
              <span>Don't have an account?</span>
              <span>|</span>
              <Link
                to="/register"
                className="text-green-600 hover:underline font-semibold"
              >
                Register
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
