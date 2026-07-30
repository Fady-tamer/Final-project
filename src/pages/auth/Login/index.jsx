import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggelHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="grow flex flex-col">
      <div className="container grow flex justify-center items-center">
        <Formik initialValues={{ email: "", password: "" }}>
          <Form className="min-w-120 p-4 flex flex-col gap-5 rounded-2xl shadow-2xl shadow-gray-600">
            <p className="text-3xl font-bold text-center">Welcome Back</p>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 rounded-xl border border-gray-300"
            />
            <div className="relative flex">
              <Field
                type={isHidden ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="grow px-4 py-2 rounded-xl border border-gray-300"
              />
              {isHidden ? (
                <FaEye
                  onClick={() => {
                    toggelHidden();
                  }}
                  className="absolute right-5 top-[25%] text-xl cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => {
                    toggelHidden();
                  }}
                  className="absolute right-5 top-[25%] text-xl cursor-pointer"
                />
              )}
            </div>
            <button className=" p-2 rounded-xl text-white not-only:font-bold bg-green-500 cursor-pointer">
              Create Account
            </button>
            <div className="flex justify-center gap-2 font-semibold">
              <p>I don't have An Account</p>
              <p> | </p>
              <Link to={"/register"} className="text-blue-400 underline">
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
