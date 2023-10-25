import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
// assets imports : icons
import { BsDot } from "react-icons/bs";

export function SideBarButtom(props) {
  return (
    <Link
      to={props.to}
      className={`flex justify-between items-center my-2 p-2 rounded-md bg-gray-800`}
    >
      <div className="flex gap-x-2">
        <IconContext.Provider value={{ className: `w-5 h-5 ${props.color}` }}>
          <span>{props.icon}</span>
        </IconContext.Provider>
        {(!props.isSideBarCollapsed || props.isHovering) && props.title}
      </div>
      {(!props.isSideBarCollapsed || props.isHovering) && (
        <IconContext.Provider value={{ className: "w-5 h-5" }}>
          <span>
            <BsDot />
          </span>
        </IconContext.Provider>
      )}
    </Link>
  );
}
