import { useContext, useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";

// icons
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

// validation
import { validation } from "./validation";

// context
import { mainStore } from "../../../context/MainContext";

const Register = () => {
  const { BASE_URL, cartEndPoint, wishListEndPoint, token } =
    useContext(mainStore);
  const endPoint = "/api/auth/local/register";

  const navigateTo = useNavigate();
  const [isHidden, setIsHidden] = useState(true);

  const toggelHidden = () => {
    setIsHidden(!isHidden);
  };

  const createNewCart = async (user_id) => {
    const newCart = {
      data: {
        items: [],
        user_id: user_id,
      },
    };

    await axios.post(`${BASE_URL}${cartEndPoint}`, newCart);
  };

  const createNewWishList = async (user_id) => {
    const newWishList = {
      data: {
        items: [],
        user_id: user_id,
      },
    };

    await axios.post(`${BASE_URL}${wishListEndPoint}`, newWishList);
  };

  const submitHandler = async (values) => {
    try {
      const res = await axios.post(`${BASE_URL}${endPoint}`, values);
      const user_id = await res.data.user.id;

      createNewCart(user_id);
      createNewWishList(user_id);

      toast.success("Account created successfully!", {
        duration: 2000,
      });

      setTimeout(() => {
        navigateTo("/login");
      }, 1500);
    } catch {
      const errorMessage = "An error occurred";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (token) {
      return navigateTo("/");
    }
  });

  return (
    <div className="grow min-h-[71dvh] flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validation}
          onSubmit={submitHandler}
        >
          <Form className="w-full p-8 flex flex-col rounded-2xl bg-white shadow-xl border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create Account
            </h1>

            {/* Username / Full Name Field */}
            <div className="flex flex-col gap-1 mb-3">
              <Field
                type="text"
                name="username"
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
              />
              <div className="text-xs text-red-500 min-h-4 px-1">
                <ErrorMessage name="username" />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1 mb-3">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
              />
              <div className="text-xs text-red-500 min-h-4 px-1">
                <ErrorMessage name="email" />
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
              Create Account
            </button>

            {/* Footer Switch */}
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium">
              <span>Already have an account?</span>
              <span>|</span>
              <Link
                to="/auth/login"
                className="text-green-600 hover:underline font-semibold"
              >
                Login
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
