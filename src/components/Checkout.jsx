import purchase from "../assets/purchase.png";
import "./css/Checkout.css";

export const Checkout = () => {
  return (
    <>
      <div id="purchase_confirm">
        <img src={purchase} width="50%" />
        <h2 id="checkout_h2">Your order has been placed successfully!</h2>
      </div>
    </>
  );
};
