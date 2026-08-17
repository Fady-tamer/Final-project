import { useContext, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

// context
import { mainStore } from "../../context/MainContext";

// icons
import { FaPen } from "react-icons/fa";
import { showSuccessToast } from "../../components/customToasts/CustomSuccesToast";
import { GoPerson } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { MdOutlinePassword } from "react-icons/md";

const Profile = () => {
  const { BASE_URL, token } = useContext(mainStore);

  const endPoint = "/api/users/";
  const dataEndPoint = "/api/users/me";

  const [isChangingUserName, setIsChangingUserName] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const FetchUserData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${dataEndPoint}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(res.data);
      } catch {
        toast.error("can't fetch data");
      }
    };

    FetchUserData();
  }, [BASE_URL, token]);

  const changeUserName = async ({ username }) => {
    try {
      const res = await axios.put(
        `${BASE_URL}${endPoint}${userData.id}`,
        { username: username },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setUserData(res.data);
      showSuccessToast("name changed");
    } catch {
      toast.error("name is taken");
    }
  };

  const changePassword = async () => {};

  const userImg = userData?.username
    ? userData.username.slice(0, 2).toUpperCase()
    : "U";

  return (
    <div className="grow min-h-[75dvh] px-4 lg:px-0 py-4 flex">
      <div className="container flex justify-center items-center">
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-gray-200">
          {/* green bg */}
          <div className="h-30 bg-green-500" />

          {/* user Img */}
          <div className="absolute top-20 translate-y-[-25%] right-[50%] translate-x-[50%] w-30 h-30 p-10 border-2 text-center border-white rounded-full bg-green-200 text-3xl font-bold">
            {userImg}
          </div>

          {/* user data */}
          <div className="px-4 pt-20 pb-4 flex flex-col gap-4">
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black font-semibold">
                <GoPerson className="w-10 h-10 p-2 rounded text-black font-semibold bg-green-200" />
                <p>{userData?.username}</p>
              </div>
              <div
                onClick={() => {
                  setIsChangingUserName(true);
                }}
                className="mr-2 p-2 flex items-center gap-4 rounded text-black font-semibold bg-green-200 cursor-pointer"
              >
                <FaPen />
                <p>change</p>
              </div>
            </div>
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black font-semibold">
                <LuMail className="w-10 h-10 p-2 rounded text-black font-semibold bg-green-200" />
                <p>{userData?.email}</p>
              </div>
            </div>
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black font-semibold">
                <MdOutlinePassword className="w-10 h-10 p-2 rounded text-black font-semibold bg-green-200" />
                <p>••••••••••••</p>
              </div>
              <div className="mr-2 p-2 flex items-center gap-4 rounded text-black font-semibold bg-green-200">
                <FaPen />
                <p>change</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {isChangingUserName && (
        <div
          onClick={() => setIsChangingUserName(false)}
          className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 p-4"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl animate-fade-in"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsChangingUserName(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Change Username
            </h3>

            <Formik
              initialValues={{ username: userData?.username || "" }}
              onSubmit={changeUserName}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    name="username"
                    placeholder="Enter new username"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-gray-900"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsChangingUserName(false)}
                      className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600 transition disabled:opacity-50"
                    >
                      {isSubmitting ? "Updating..." : "Change"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
