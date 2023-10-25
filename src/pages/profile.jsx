// assets import : images
import { Link } from "react-router-dom";
import girl_studying_with_music from "../assets/images/girl_studying_with_music.jpg";
import { IconContext } from "react-icons";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { EditSquare } from "react-iconly";

function NutritionDashboardProfile(props) {
  // Handle the showed profile menu info
  const [showedProfileInfo, setShowedProfileInfo] = useState(0);
  // Toggle edit profile
  const [toggleEditProfile, setToggleEditProfile] = useState(false);

  return (
    <div className="relative flex grow justify-center w-3/5 h-[90vh] rounded-md bg-white">
      <div className="w-full h-1/2 rounded-t-md bg-gradient-to-r from-indigo-500 via-green-500 to-green-500"></div>
      <div className="absolute self-center flex w-[95%] h-[95%] m-10 rounded-md bg-white shadow-md">
        {/* Profile Sidebar */}
        <div className="flex flex-col justify-between items-center gap-y-2 w-[30%] border-r rounded-l-md overflow-y-auto scrollbar">
          <div className="flex flex-col items-center gap-x-2 p-2">
            <img
              src={girl_studying_with_music}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            <p className="font-[SamsungOneB]">Julie Queen</p>
            <p className="text-sm">juliequeen@juliequeen.com</p>
          </div>

          <div className="flex flex-col flex-grow gap-y-4 w-full">
            <button
              onClick={() => {
                setShowedProfileInfo(0);
              }}
              className="flex justify-between items-center w-full p-2 border-l-4 border-green-500 bg-slate-100 hover:bg-slate-200"
            >
              <p>Personnal</p>
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
            </button>
            <button
              onClick={() => {
                setShowedProfileInfo(1);
              }}
              className="flex justify-between items-center w-full p-2 border-l-4 border-green-500 bg-slate-100 hover:bg-slate-200"
            >
              <p>Goals</p>
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
            </button>
            <button
              onClick={() => {
                setShowedProfileInfo(2);
              }}
              className="flex justify-between items-center w-full p-2 border-l-4 border-green-500 bg-slate-100 hover:bg-slate-200"
            >
              <p>Account</p>
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
            </button>
            <button
              onClick={() => {
                setShowedProfileInfo(3);
              }}
              className="flex justify-between items-center w-full p-2 border-l-4 border-green-500 bg-slate-100 hover:bg-slate-200"
            >
              <p>Subscription</p>
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
            </button>
          </div>
          <button
            onClick={() => {
              props.setDeleteAccount(true);
            }}
            className="w-full mb-2 p-2 bg-red-500/40 text-center text-red-500 font-[SamsungOneB]"
          >
            <p>Delete my Account</p>
          </button>
        </div>
        {/* Profile Content */}
        <div className="flex flex-col flex-grow gap-y-2 p-2 rounded-r-md">
          {/* Profile Content Head */}
          <div className="flex justify-between items-center">
            {showedProfileInfo === 0 && (
              <p className="text-xl font-[SamsungOneB]">
                Personnal Informations
              </p>
            )}
            {showedProfileInfo === 1 && (
              <p className="text-xl font-[SamsungOneB]">Goals</p>
            )}
            {showedProfileInfo === 2 && (
              <p className="text-xl font-[SamsungOneB]">Account</p>
            )}
            {showedProfileInfo === 3 && (
              <p className="text-xl font-[SamsungOneB]">Subscription</p>
            )}
            <button
              onClick={() => {
                setToggleEditProfile((prev) => !prev);
              }}
              className={`p-2 rounded-md ${
                !toggleEditProfile ? "bg-green-500" : "bg-red-600"
              } text-white`}
            >
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>{toggleEditProfile ? <VscClose /> : <EditSquare />}</span>
              </IconContext.Provider>
            </button>
          </div>
          {/* Profile Content Body */}
          <div className="flex flex-col flex-grow gap-y-4 bg-blue-500"></div>
          {/* Profile Content Foot */}
          <div className="flex justify-center md:justify-end items-center gap-x-2">
            <button
              onClick={() => {}}
              className="px-4 py-2 bg-green-500 text-white"
            >
              Save
            </button>
            <button
              onClick={() => {
                setToggleEditProfile(false);
              }}
              className="p-2 bg-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionDashboardProfile;
