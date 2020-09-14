import { useStateValue } from "../../reducers/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../reducers/reducer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import "./Payment.scss";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event) => {};

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <section className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket?.length === 1 ? "item" : "items"}
          </Link>
          )
        </h1>
        <section className="payment__section">
          <h3 className="payment__title">Delivery Address</h3>
          <main className="payment__address">
            <p>{user?.email}</p>
            <p>Random Street</p>
            <p>Los Angeles</p>
          </main>
        </section>

        <section className="payment__section">
          <h3 className="payment__title">Review items and delivery</h3>
          <main className="payment__items">
            {basket?.map((element) => (
              <CheckoutProduct
                id={element.id}
                image={element.image}
                title={element.title}
                price={element.price}
                rating={element.rating}
                basketId={element.basketId}
                key={element.basketId}
              />
            ))}
          </main>
        </section>
        <section className="payment__section">
          <h3 className="payment__title">Payment Method</h3>
          <main className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>

                {/* Error handler */}
                {error && <div>{error}</div>}
              </div>
            </form>
          </main>
        </section>
      </section>
    </div>
  );
}

export default Payment;
