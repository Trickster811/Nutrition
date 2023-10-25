import { useState } from "react";
import { IconContext } from "react-icons";
import { BsDot } from "react-icons/bs";
import { LuCheck } from "react-icons/lu";

function NutritionDashboardSettings(props) {
  // Toggle `NOTIFY ME` state
  const [notifyMe, setNotifyMe] = useState(true);
  // Toggle `EMAIL ME` state
  const [emailMe, setEmailMe] = useState(true);
  return (
    <div className="flex flex-col flex-grow p-2 rounded-md bg-white">
      <div className="mb-8 text-xl md:text-3xl font-[SamsungOneB]">
        Settings
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-[SamsungOneB]">Updates</p>
        <div className="flex items-center justify-between text-sm p-4 bg-slate-100">
          <div className="flex gap-x-2">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <span>
                <BsDot />
              </span>
            </IconContext.Provider>
            Notify (on the platform) me on new updates
          </div>
          <button
            type="button"
            onClick={() => {
              setNotifyMe((prevnotifyMe) => !prevnotifyMe);
            }}
            className={`w-5 h-5 px-0.5 rounded border border-black ${
              notifyMe && "bg-blue-700 border-none"
            }`}
          >
            {notifyMe && (
              <IconContext.Provider value={{ className: "w-4 h-4 text-white" }}>
                <span className="block">
                  <LuCheck />
                </span>
              </IconContext.Provider>
            )}
          </button>
        </div>
        <div className="flex items-center justify-between text-sm p-4 bg-slate-100">
          <div className="flex gap-x-2">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <span>
                <BsDot />
              </span>
            </IconContext.Provider>
            Email me on new updates on the platform
          </div>
          <button
            type="button"
            onClick={() => {
              setEmailMe((prevemailMe) => !prevemailMe);
            }}
            className={`w-5 h-5 px-0.5 rounded border border-black ${
              emailMe && "bg-blue-700 border-none"
            }`}
          >
            {emailMe && (
              <IconContext.Provider value={{ className: "w-4 h-4 text-white" }}>
                <span className="block">
                  <LuCheck />
                </span>
              </IconContext.Provider>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NutritionDashboardSettings;
