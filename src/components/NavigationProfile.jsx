import cart from "../assets/cart_white.png";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom"

const NavigationProfile = () => {


  return (
    <>
      <div className="profile_container">
        <div className="shopping_cart">
          <img id="shopping_cart_image" src={cart} alt="shopping cart" />
        </div>
        <div className="profile_detail">
          <Link to="/login"><Modal /></Link>
        </div>
      </div>
    </>
  );
};

export default NavigationProfile;
