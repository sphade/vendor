import React from "react";
import { NavLink } from "react-router-dom";
import {
  CategoryActiveIcon,
  CategoryIcon,
  LogoIcon,
  NoteTextActiveIcon,
  NoteTextIcon,
  PlaneActiveIcon,
  PlaneIcon,
  ProfileActiveIcon,
  ProfileIcon,
  WalletActiveIcon,
  WalletIcon,
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
    Icon: CategoryIcon,
    ActiveIcon: CategoryActiveIcon,
  },
  {
    text: "aircraft",
    link: "/aircraft",
    Icon: PlaneIcon,
    ActiveIcon: PlaneActiveIcon,
  },
  {
    text: "booking",
    link: "/booking",
    Icon: ProfileIcon,
    ActiveIcon: ProfileActiveIcon,
  },
  {
    text: "transactions",
    link: "/transactions",
    Icon: WalletIcon,
    ActiveIcon: WalletActiveIcon,
  },
  {
    text: "calender",
    link: "/calender",
    Icon: NoteTextIcon,
    ActiveIcon: NoteTextActiveIcon,
  },
];
