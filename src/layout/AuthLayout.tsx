import LogoPremium from "../assets/images/icons/LogoPremium.svg";

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen grid place-items-center">
      <div >
        <header className="center-element my-10 ">
          <img src={LogoPremium} alt={LogoPremium} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
