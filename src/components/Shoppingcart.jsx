import { useContext, useEffect } from "react";
import { stateContext } from "../context/stateContext.jsx";
import { useNavigate } from "react-router-dom";
import "./css/Shoppingcart.css";

const Shoppingcart = () => {
  const { cart, setCart } = useContext(stateContext);
  const navigate = useNavigate();

  const handleClick = (itemId) => {
    const itemIndex = cart.findIndex((item) => item.cardId === itemId);

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    console.log("Total Price:", totalPrice);
  }, [cart]);

  return (
    <>
      <div id="cart_container">
        {cart?.length === 0 ? (
          <h2>There is nothing in your shopping cart ...</h2>
        ) : (
          <div>
            <h2>Your shopping cart:</h2>
            <div className="sc_container">
              <div className="sc_quantity">Quantity:</div>
              <div className="sc_name">Name:</div>
              <div className="sc_price">Price:</div>
            </div>
            {cart?.map((item) => (
              <div id="cart_item_container" key={item.cardId}>
                <div id="shop_cart_qty">{item.amount} x</div>
                <div id="shop_cart_name">{item.name}</div>
                <div id="shop_cart_price">{item.price.toFixed(2)} €</div>
                <button id="del_btn" onClick={() => handleClick(item.cardId)}>
                  Delete Item
                </button>
              </div>
            ))}
            <div id="the_price_is_right">
              <div id="total_price">
                <b>Total Price:</b> {calculateTotalPrice().toFixed(2)}€
              </div>
              <div id="checkout">
              <button id="btn_back" onClick={() => navigate(-1)}>Back</button>
              <button id="btn_checkout">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shoppingcart;
