import cartimg from "../assets/cart_white.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { stateContext } from "../context/stateContext.jsx";

const NavigationProfile = () => {
  const { isAuthenticated, logOut, cart, user } = useContext(stateContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const cart_img = {
    backgroundImage: `url(${cartimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100px",
    height: "50px",
  };

  return (
    <>
      <div className="profile_container">
        <div className="profile_detail">
          <ul>
            <li className="shopping_cart">
              <Link to="/auth/shoppingcart">
                <div id="cart_number" style={cart_img}>
                <h2>{cart.length}</h2>
                </div>
              </Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li>
                  <Link id="login_registration_link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link id="login_registration_link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
              
                <li>
                  <Link id="login_registration_link" to="/auth/create">
                    Sell Card
                  </Link>
                </li>
                <li id="logout" onClick={logOut}>
                  <p>Logout</p>
                </li>
                <li>
                  {user && (
                    <div className="testing">
                      <h2>{user.username}!</h2>
                      <div className="dropdown" onClick={toggleDropdown}>
                        <span>▼</span>
                        {showDropdown && (
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/auth/recentpurchases">Recent Purchases</Link>
                            </li>
                            <li>
                              <Link to="/auth/currentsales">Current Sales</Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationProfile;
