import { useState } from "react";
import NutritionDashboardHeader from "../layouts/header";
import NutritionDashboardSideBar from "../layouts/sidebar";
import NutritionRoutes from "../routes/routes";
import { IconContext } from "react-icons";
import { BsDot } from "react-icons/bs";

function NutritionStartPage(props) {
  // Set sidebar is collapsed or not
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  // Toggle Account Deletion State
  const [deleteAccount, setDeleteAccount] = useState(false);

  return (
    <div className="relative flex h-screen w-screen">
      <div className="flex flex-col gap-y-2 w-full h-full p-2 bg-slate-200">
        {/* Dashboard Space Head */}
        <NutritionDashboardHeader />
        {/* Dashboard Space Main Content */}
        <div className="flex flex-grow gap-x-2">
          {/* Dashboard Space Main Content SideBar */}
          <NutritionDashboardSideBar
            isSideBarCollapsed={isSideBarCollapsed}
            setIsSideBarCollapsed={setIsSideBarCollapsed}
          />
          {/* Dashboard Space Main Content Body */}
          <NutritionRoutes
            isSideBarCollapsed={isSideBarCollapsed}
            deleteAccount={deleteAccount}
            setDeleteAccount={setDeleteAccount}
          />
        </div>
      </div>{" "}
      {deleteAccount && (
        <ToggleAccountDeletionModal setDeleteAccount={setDeleteAccount} />
      )}
    </div>
  );
}

export default NutritionStartPage;

function ToggleAccountDeletionModal(props) {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen backdrop-blur-sm">
      <div className="flex flex-col gap-y-2 w-full md:w-[40vw] p-2 rounded-md bg-slate-200">
        <p className="text-xl text-center text-red-500 font-[SamsungOneB]">
          Remove My Account
        </p>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">Deleting your account means you will lost:</p>
          <ul className="ml-4 text-xs font-[SamsungOneB]">
            <li className="flex gap-x-2">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
              All of your personnal registered data.
            </li>
            <li className="flex gap-x-2">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
              All goals you have set.
            </li>
            <li className="flex gap-x-2">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
              Your progress data in the dashboard.
            </li>
            <li className="flex gap-x-2">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
              All of your saved recipes and meal plans.
            </li>
            <li className="flex gap-x-2">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  <BsDot />
                </span>
              </IconContext.Provider>
              All your account informations
            </li>
          </ul>
          <p className="text-sm">
            Once your click on button{" "}
            <span className="text-red-500 font-[SamsungOneB]">Delete</span>, all
            of your data could be recovered.
          </p>
        </div>

        <div className="flex justify-center items-center md:gap-x-2 gap-y-2 md:gap-y-0">
          <button
            onClick={() => {}}
            className="px-4 py-2 rounded-md bg-red-500 text-white"
          >
            Delete
          </button>
          <button
            onClick={() => {
              props.setDeleteAccount(false);
            }}
            className="px-4 py-2 rounded-md bg-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
