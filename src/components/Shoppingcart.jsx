import { useContext, useEffect, useState } from "react";
import { stateContext } from "../context/stateContext.jsx";
import { useNavigate } from "react-router-dom";
import "./css/Shoppingcart.css";
import paypal from "../assets/paypal.png";
import creditcard from "../assets/creditcard.png";

const Shoppingcart = () => {
  const { cart, setCart } = useContext(stateContext);
  const navigate = useNavigate();
  const inputstyle = {
    borderBottom: '2px solid #000',
    color: '#000'
  };

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [paypalChecked, setPaypalChecked] = useState(false);
  const [creditCardChecked, setCreditCardChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});

  const handlePaypalChange = () => {
    setPaypalChecked(true);
    setCreditCardChecked(false);
  };

  const handleCreditCardChange = () => {
    setPaypalChecked(false);
    setCreditCardChecked(true);
  };

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

  const handleCheckoutClick = () => {
    setShowPaymentDetails(true);
  };

  const handleBackClick = () => {
    setShowPaymentDetails(false);
  };

  const handlePayClick = () => {
    if (!creditCardChecked && !paypalChecked) {
      alert("Please select a payment option!")
    } else {
      setCart([]);
      navigate("checkout")
      setTimeout(() => {
        navigate(`/`, { replace: true });
      }, 3000);
    }
    
  };


  return (
    <>
      <div id="cart_container">
        {cart?.length === 0 ? (
          <h2>There is nothing in your shopping cart ...</h2>
        ) : (
          <div>
            <h2 id="green">Your cart:</h2>
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
              {!showPaymentDetails && (
                <div id="checkout">
                  <button id="btn_back" onClick={() => navigate(-1)}>
                    Back
                  </button>
                  <button id="btn_checkout" onClick={handleCheckoutClick}>
                    Checkout
                  </button>
                </div>
              )}
              {showPaymentDetails && (
                <div id="payment_details">
                  <div id="details_payment_container">
                    <h2>Select your payment-method:</h2>
                    <div id="payment_flex">
                      <div id="input_width">
                        <div id="address_flex">
                          
                            <div>
                              <label id="label_space">
                                Address:
                                </label>
                                <input type="text" className="shoppingcart_input" style={inputstyle}></input>
                            </div>
                            <div>
                              <label id="label_space">
                                Zip Code:
                                </label>
                                <input type="text" className="shoppingcart_input" style={inputstyle}></input>
                              
                            </div>
                            <div>
                              <label id="label_space">
                                City:
                                </label>
                                <input type="text" className="shoppingcart_input" style={inputstyle}></input>
                              
                            </div>
                          
                        </div>
                      </div>
                      <div id="payment_select">
                        <label>
                          <input
                            type="checkbox"
                            checked={paypalChecked}
                            onChange={handlePaypalChange}
                          />
                          <img src={paypal} width="60%" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={creditCardChecked}
                            onChange={handleCreditCardChange}
                          />
                          <img src={creditcard} width="40%" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div id="payment_buttons">
                    <button id="return_btn" onClick={handleBackClick}>
                      Cancel
                    </button>
                    <button id="btn_checkout" onClick={handlePayClick}>
                      Complete Purchase
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shoppingcart;
