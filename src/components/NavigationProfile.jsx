import cartimg from "../assets/cart_white.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { stateContext } from "../context/stateContext.jsx";

const NavigationProfile = () => {
  const { isAuthenticated, logOut, cart } = useContext(stateContext);

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
          <Link to="/auth/shoppingcart">
            <div id="cart_number" style={cart_img}>
              <h2>{cart.length}</h2>
            </div>
          </Link>
          <ul>
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
                <Link id="login_registration_link" to="/auth/mycards">
                <li>My cards</li>
                </Link>
                <li id="logout" onClick={logOut}>
                  <p>Logout</p>
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
