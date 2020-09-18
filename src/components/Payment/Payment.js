import { useStateValue } from "../../reducers/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../reducers/reducer";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import "./Payment.scss";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [orderDate, setOrderDate] = useState(null);

  useEffect(() => {
    //  Create date to basket order
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const date = new Date();
    setOrderDate(date.toLocaleDateString("en-US", options));
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const cost = getBasketTotal(basket);

    dispatch({
      type: "ADD_ORDER",
      order: {
        date: orderDate,
        cost: cost,
        basket,
      },
    });

    setSucceeded(true);
    setError(null);
    setProcessing(false);
    setOrderDate(null);

    history.replace("/orders");
  };

  const handleChange = (event) => {
    setDisabled(event.error);
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
