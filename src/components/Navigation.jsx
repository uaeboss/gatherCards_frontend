import { NavLink } from "react-router-dom";
import CardgameDropdown from "./CardgameDropdown";
import Navigation_Profile from "./NavigationProfile";
import logo from "../images/logo_white_name.png";
import "./css/Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation_container">
        <div className="nav_links">
          <img id="start_logo_size" src={logo} alt="logo" />
          <nav>
            <NavLink>Home</NavLink>
            <NavLink>News</NavLink>
            <NavLink>Cardgames</NavLink>
          </nav>
        </div>
        <div className="nav_selector">
          <CardgameDropdown />
        </div>
        <div className="nav_profile">
          <Navigation_Profile />
        </div>
      </div>
    </>
  );
};

export default Navigation;
