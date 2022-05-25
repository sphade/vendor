import React from "react";
import { NavLink } from "react-router-dom";
import profileIcon from "../assets/images/icons/profileIcon.svg";
import planeIcon from "../assets/images/icons/planeIcon.svg";
import logo from "../assets/images/icons/Logo.png";
type Props = {};
interface IState {
  sidebarOptions: { text: string; link: string; Icon: string }[];
}

const Sidebar = (props: Props) => {
  return (
    <section className="w-[230px] bg-secondary h-screen  sticky top-0 left-0">
      <div className="font-bold text-2xl pl-5 pt-10 h-[160px] ">
        <img src={logo}></img>
      </div>

      <nav>
        <ul className="space-y-6 mr-5">
          {sidebarOptions.map(({ Icon, link, text }, id) => (
            <li key={id}>
              <NavLink
                to={link}
                className="py-2 px-5 rounded-r-full  flex items-center gap-5 text-gray-700 hover:bg-orange-100 default-transition"
              >
                <img src={Icon} alt={text} />
                <p className="capitalize text-lg font-semibold ">{text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;

const sidebarOptions: IState["sidebarOptions"] = [
  {
    text: "overview",
    link: "/overview",
    Icon: profileIcon,
  },
  {
    text: "aircraft",
    link: "/aircraft",
    Icon: planeIcon,
  },
  {
    text: "booking",
    link: "/booking",
    Icon: profileIcon,
  },
  {
    text: "transactions",
    link: "/transactions",
    Icon: profileIcon,
  },
  {
    text: "calender",
    link: "/calender",
    Icon: planeIcon,
  },
];
