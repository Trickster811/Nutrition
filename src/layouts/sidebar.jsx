import { useState } from "react";
import { IconContext } from "react-icons";
import { SideBarButtom } from "../components/sidebar.components";
// assets imports : icons
import { BsChevronLeft, BsPinAngle } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
// assets import : images

function NutritionDashboardSideBar(props) {
  //   return <div className="flex flex-col w-[20vw] p-2 rounded-md bg-white"></div>;
  // Handle the mouse hovering the sidebar
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`
     ${
       props.isSideBarShowed
         ? "absolute z-50 md:z-0 flex flex-col justify-between items-center"
         : "hidden"
     } md:flex md:flex-col ${
        props.isSideBarCollapsed
          ? "w-[4vw] md:hover:w-[20vw]"
          : "w-[60vw] md:w-[20vw]"
      } flex-grow-0 p-2 rounded-md bg-gray-950 text-white font-[SamsungOne] duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col flex-grow overflow-x-auto md:scrollbar">
        {(!props.isSideBarCollapsed || isHovering) && (
          <div className="flex justify-between items-center">
            <div className="text-lg font-[SamsungOneB]">Home</div>
            <button
              id="sideBarCollpased"
              className={`hidden ${
                props.isSideBarCollapsed && !isHovering ? "p-0" : "p-1"
              } md:block rounded shadow-inner hover:bg-slate-200`}
              onClick={() => {
                props.setIsSideBarCollapsed((prev) => !prev);
              }}
            >
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <span>
                  {props.isSideBarCollapsed ? (
                    isHovering && <BsPinAngle />
                  ) : (
                    <BsChevronLeft />
                  )}
                </span>
              </IconContext.Provider>
            </button>
          </div>
        )}
        <SideBarButtom
          to={"/"}
          title={"Analytics"}
          isSideBarCollapsed={props.isSideBarCollapsed}
          isHovering={isHovering}
          icon={<RxDashboard />}
          color={"text-blue-500"}
        />
        <SideBarButtom
          to={"subscription"}
          title={"Package Deals"}
          isSideBarCollapsed={props.isSideBarCollapsed}
          isHovering={isHovering}
          icon={<GoPackage />}
          color={"text-green-500"}
        />
        {(!props.isSideBarCollapsed || isHovering) && (
          <div className="mt-4 text-lg font-[SamsungOneB]">Account</div>
        )}
        <SideBarButtom
          to={"profile"}
          title={"Profile"}
          isSideBarCollapsed={props.isSideBarCollapsed}
          isHovering={isHovering}
          icon={<VscAccount />}
          color={"text-purple-500"}
        />
        <SideBarButtom
          to={"settings"}
          title={"Settings"}
          isSideBarCollapsed={props.isSideBarCollapsed}
          isHovering={isHovering}
          icon={<LuSettings />}
          color={"text-yellow-500"}
        />
      </div>
    </div>
  );
}

export default NutritionDashboardSideBar;
