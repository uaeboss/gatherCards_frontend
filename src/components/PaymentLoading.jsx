import "./css/PaymentLoading.css"

const PaymentLoading = () => {
  return (
    <>
      <div id="payment_loading_container">
        <div className="spinner" role="status"></div>
        <p>Your purchase is being processed ...</p>
      </div>
    </>
  );
};

export default PaymentLoading;
