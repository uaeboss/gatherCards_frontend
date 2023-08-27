import { NavLink } from "react-router-dom";
import Navigation_Profile from "./NavigationProfile";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = ({ isAuthenticated, user, logOut }) => {


  return (
    <>
      <div className="navigation_container">
        <div className="nav_links">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/marketplace">Marketplace</NavLink>
          </nav>
        </div>
        <div className="nav_selector">
        {user && (
                  <Link to="/auth">
                    <h2>Willkommen zurück, {user.username}!</h2>
                  </Link>
              )}
        </div>
        <div className="nav_profile">
          <Navigation_Profile logOut={logOut} isAuthenticated={isAuthenticated} user={user} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
