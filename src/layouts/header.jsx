import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
// assets import : icons
import { LuBellDot, LuSearch } from "react-icons/lu";
// assets import : images
import girl_studying_with_music from "../assets/images/girl_studying_with_music.jpg";
import logo from "../assets/icons/logo.svg";

function NutritionDashboardHeader(props) {
  return (
    <div className="flex justify-between items-center gap-x-2">
      <div className="flex justify-center items-center w-[20vw] h-full rounded-md bg-gray-950 text-center text-xl md:text-2xl text-green-600 font-[SamsungOneB]">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p>Nutrition-DMHT</p>
      </div>
      <div className="flex flex-grow justify-between items-center gap-x-2 px-2 rounded-md bg-white">
        <div className="flex flex-grow justify-between items-center h-10 md:w-[50vw] px-4 rounded-md bg-slate-50">
          <IconContext.Provider value={{ className: "w-5 h-5 text-gray-950" }}>
            <span>
              <LuSearch />
            </span>
          </IconContext.Provider>
          <input
            type="text"
            className="flex-grow px-4 w-full bg-transparent border-transparent focus:outline-none focus:ring-0 focus:border-transparent"
            name="question"
            id="question"
            placeholder="your research here"
            // onChange={(inputState) => handingChangeIconSend(inputState)}
          />
        </div>
        <Link to={"#"} className="p-2 rounded-md border border-dashed">
          <IconContext.Provider value={{ className: "w-5 h-5 text-gray-950" }}>
            <span>
              <LuBellDot />
            </span>
          </IconContext.Provider>
        </Link>
        <Link
          to={"profile"}
          className="flex items-center gap-x-2 px-2 py-0.5 rounded-md border border-dashed"
        >
          <img
            src={girl_studying_with_music}
            alt="profile_pic"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-xs">
            <p className="font-[SamsungOneB]">Julie Queen</p>
            <p className="">juliequeen@juliequeen.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NutritionDashboardHeader;
