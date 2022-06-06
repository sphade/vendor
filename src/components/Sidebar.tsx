import React from "react";
import { NavLink } from "react-router-dom";
import profileIcon from "../assets/images/icons/profileIcon.svg";
import planeIcon from "../assets/images/icons/planeIcon.svg";
import {
  CategoryActiveIcon,
  
  LogoIcon,
  WalletActiveIcon,
} from "../assets/images/icons";
type Props = {};
interface IState {
  sidebarOptions: {
    text: string;
    link: string;
    Icon: string;
    ActiveIcon: string;
  }[];
}

const Sidebar = (props: Props) => {
  return (
    <section className="w-[230px] bg-secondary h-screen  sticky top-0 left-0">
      <div className="font-bold text-2xl pl-5 pt-10 h-[160px] ">
        <img src={LogoIcon} alt={LogoIcon}></img>
      </div>

      <nav>
        <ul className="space-y-6 mr-5">
          {sidebarOptions.map(({ Icon, link, text, ActiveIcon }, id) => (
            <li key={id}>
              <NavLink
                to={link}
                className="hover:bg-[#f3f3f3]  py-2 px-5 rounded-r-full   flex items-center gap-5 text-gray-700  default-transition"
              >
                {({ isActive }) => (
                  <>
                    <img src={isActive ? ActiveIcon : Icon} alt={text} />
                    <p className="capitalize text-lg font-semibold ">{text}</p>
                  </>
                )}
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
    ActiveIcon: WalletActiveIcon,
  },
  {
    text: "aircraft",
    link: "/aircraft",
    Icon: planeIcon,
    ActiveIcon: WalletActiveIcon,
  },
  {
    text: "booking",
    link: "/booking",
    Icon: profileIcon,
    ActiveIcon: WalletActiveIcon,
  },
  {
    text: "transactions",
    link: "/transactions",
    Icon: profileIcon,
    ActiveIcon: WalletActiveIcon,
  },
  {
    text: "calender",
    link: "/calender",
    Icon: profileIcon,
    ActiveIcon: CategoryActiveIcon,
  },
];
