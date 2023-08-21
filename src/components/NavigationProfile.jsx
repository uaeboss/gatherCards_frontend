import cart from "../images/cart_white.png";

const NavigationProfile = () => {
  return (
    <>
      <div className="profile_container">
        <div className="shopping_cart">
          <img id="shopping_cart_image" src={cart} alt="shopping cart" />
        </div>
        <div className="profile_detail">
          <div id="profile_image_test"></div>
        </div>
      </div>
    </>
  );
};

export default NavigationProfile;
