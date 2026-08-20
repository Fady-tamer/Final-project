import { useContext, useState } from "react";

// context
import { mainStore } from "../../context/MainContext";

// icons
import { FaPen } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocalPhone, MdOutlinePassword } from "react-icons/md";

// components
import ChangeUserNameModel from "../../components/Models/ChangeUserNameModel";
import ChangeLastNameModel from "../../components/Models/ChangeLastNameModel";
import ChangePasswordModel from "../../components/Models/ChangePasswordModel";
import ChangePhoneModel from "../../components/Models/ChangePhoneModel";

const Profile = () => {
  const { userData } = useContext(mainStore);

  const [isChangingUserName, setIsChangingUserName] = useState(false);
  const [isChangingLastName, setIsChangingLastName] = useState(false);
  const [isChangingPhone, setIsChangingPhone] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const userImg = userData
    ? userData.lastName
      ? userData.username.slice(0, 1).toUpperCase() +
        userData.lastName.slice(0, 1).toUpperCase()
      : userData.username.slice(0, 2).toUpperCase()
    : "U";

  return (
    <div className="grow min-h-[56dvh] px-4 lg:px-0 py-4 flex">
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
            {/* first name */}
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black">
                <GoPerson className="w-10 h-10 p-2 rounded text-black text-xs md:text-base bg-green-200" />
                <p className="text-xs md:text-base">{userData?.username}</p>
              </div>
              <button
                onClick={() => {
                  setIsChangingUserName(true);
                }}
                className="mr-2 p-2 flex items-center gap-4 rounded text-black bg-green-200 cursor-pointer"
              >
                <FaPen className="text-xs md:text-base" />
                <p className="hidden md:block">change</p>
              </button>
            </div>

            {/* last name */}
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black">
                <GoPerson className="w-10 h-10 p-2 rounded text-black bg-green-200" />
                <p className="text-xs md:text-base">
                  {userData.lastname ? userData.lastname : "Add Last Name"}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsChangingLastName(true);
                }}
                className="mr-2 p-2 flex items-center gap-4 rounded text-black bg-green-200 cursor-pointer"
              >
                <FaPen className="text-xs md:text-base" />
                <p className="hidden md:block">change</p>
              </button>
            </div>

            {/* email */}
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black">
                <LuMail className="w-10 h-10 p-2 rounded text-black bg-green-200" />
                <p className="text-xs md:text-base">{userData?.email}</p>
              </div>
            </div>

            {/* phone */}
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black">
                <MdOutlineLocalPhone className="w-10 h-10 p-2 rounded text-black bg-green-200" />
                <p className="text-xs md:text-base">
                  {userData.phone ? userData.phone : "Add Phone Number"}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsChangingPhone(true);
                }}
                className="mr-2 p-2 flex items-center gap-4 rounded text-black bg-green-200 cursor-pointer"
              >
                <FaPen className="text-xs md:text-base" />
                <p className="hidden md:block">change</p>
              </button>
            </div>

            {/* password */}
            <div className="flex justify-between items-center rounded bg-white">
              <div className="p-2 flex items-center gap-4 rounded text-black">
                <MdOutlinePassword className="w-10 h-10 p-2 rounded text-black bg-green-200" />
                <p className="text-xs md:text-base">••••••••••••</p>
              </div>
              <button
                onClick={() => {
                  setIsChangingPassword(true);
                }}
                className="mr-2 p-2 flex items-center gap-4 rounded text-black bg-green-200 cursor-pointer"
              >
                <FaPen className="text-xs md:text-base" />
                <p className="hidden md:block">change</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isChangingUserName && (
        <ChangeUserNameModel setIsChangingUserName={setIsChangingUserName} />
      )}

      {isChangingLastName && (
        <ChangeLastNameModel setIsChangingLastName={setIsChangingLastName} />
      )}

      {isChangingPhone && (
        <ChangePhoneModel setIsChangingPhone={setIsChangingPhone} />
      )}

      {isChangingPassword && (
        <ChangePasswordModel setIsChangingPassword={setIsChangingPassword} />
      )}
    </div>
  );
};

export default Profile;
