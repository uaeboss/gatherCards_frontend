import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import Navigation_Profile from "./NavigationProfile";
import "./css/Navigation.css";
import { stateContext } from "../context/stateContext.jsx";
import sitelogo from "../assets/white_name.png"

const Navigation = () => {
const { isAuthenticated, user, logOut}=useContext(stateContext)

  return (
    <>
      <div className="navigation_container">
        <div className="nav_links">
          <nav>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/news">News</NavLink> */}
            <NavLink to="/magic">Magic</NavLink>
            <NavLink to="/marketplace">Marketplace</NavLink>
          </nav>
        </div>
        <div className="nav_selector">
          <img src={sitelogo} />
        </div>
        <div className="nav_profile">
          <Navigation_Profile logOut={logOut} isAuthenticated={isAuthenticated} user={user} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
