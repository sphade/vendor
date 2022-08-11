import React from "react";
import { NavLink } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
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
  /* WalletActiveIcon,
  WalletIcon, */
} from "../assets/images/icons";
type Props = {};
interface IState {
  sidebarOptions: {
    text: string;
    link: string;
    Icon: any;
    ActiveIcon: any;
  }[];
}

const Sidebar = (props: Props) => {
  return (
    <section className="w-[230px] z-50 bg-secondary h-screen  fixed top-0 left-0">
      <div className="font-bold text-2xl pl-5 pt-10 h-[160px] ">
        <LogoIcon/>
      </div>

      <nav className="">
        <ul className="space-y-6 mr-5 ">
          {sidebarOptions.map(({ Icon, link, text, ActiveIcon }, id) => (
            <li key={id}>
              <ButtonBase
                sx={{
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                }}
              >
                <NavLink
                  to={link}
                  className="hover:bg-[#f3f3f3] w-[212px]   py-2 px-5 rounded-r-full   flex items-center gap-5 text-[#4F4F4F]  default-transition"
                >
                  {({ isActive }) => (
                    <>
                      {
                        
                        isActive ?
                          <ActiveIcon /> : <Icon className=''/>
                    }
                      <p className="capitalize text-lg font-medium ">{text}</p>
                    </>
                  )}
                </NavLink>{" "}
              </ButtonBase>
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
 /*  {
    text: "transactions",
    link: "/transactions",
    Icon: WalletIcon,
    ActiveIcon: WalletActiveIcon,
  }, */
  {
    text: "calender",
    link: "/calender",
    Icon: NoteTextIcon,
    ActiveIcon: NoteTextActiveIcon,
  },
];
