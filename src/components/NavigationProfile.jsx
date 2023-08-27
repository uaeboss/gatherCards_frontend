import cart from "../assets/cart_white.png";
// import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";

const NavigationProfile = ({ isAuthenticated, user, logOut }) => {
  return (
    <>
      <div className="profile_container">
        <div className="profile_detail">
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
            <li className="shopping_cart">
            <img id="shopping_cart_image" src={cart} alt="shopping cart" />
          </li>
              <li>
                <Link id="login_registration_link" to="/auth/create">
                  Sell Card
                </Link>
              </li>
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
