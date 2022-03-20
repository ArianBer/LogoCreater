import { SideBar } from "components/SideBar/SideBar";
import { NavLink } from "react-router-dom";
//styles
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home">
      <SideBar />
    </div>
  );
};
