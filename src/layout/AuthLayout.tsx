import {ReactComponent as LogoPremium} from "../assets/images/icons/LogoPremium.svg";

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-[#F2F2F2] min-h-screen grid place-items-center">
      <div>
        <header className="center-element my-10 ">
     
              <LogoPremium/>
          
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
