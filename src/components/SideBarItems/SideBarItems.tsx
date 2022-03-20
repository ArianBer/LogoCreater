import { Button } from "components/shared/Button/Button";
import React from "react";

import Logo from "../../assets/images/L.svg";
import "./SideBarItems.scss";

export const SideBarItems = () => {
  return (
    <div className="SideBarItems">
      <div className="SideBarItems__content">
        <img className="SideBarItems__logo" src={Logo} />
        <div className="SideBarItems__buttons">
          <Button className="bg-black">Login</Button>
          <Button className="SideBarItems__buttons-signup">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
