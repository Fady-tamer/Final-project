import React from "react";
import { Link, useNavigate } from "react-router";
// If using react-router-dom, update import to:
// import { Link, useNavigate } from "react-router-dom";

// icons
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grow py-12 flex items-center justify-center min-h-[70vh]">
      <div className="container max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Visual 404 Badge / Text */}
        <div className="relative mb-6">
          <h1 className="text-8xl sm:text-9xl font-extrabold text-green-500 tracking-widest select-none">
            404
          </h1>
          <div className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2 shadow-sm whitespace-nowrap">
            Page Not Found
          </div>
        </div>

        {/* Informative Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 mb-2">
          Oops! Looks like you're lost.
        </h2>
        <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Go Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaArrowLeft className="text-sm" />
            Go Back
          </button>

          {/* Return Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <FaHome className="text-lg" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;