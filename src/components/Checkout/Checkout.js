import React from "react";
import "./Checkout.scss";
import Subtotal from "../Subtotal/Subtotal";
import { checkoutAd } from "../../data";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="checkout ad" />

        <div>
          <h3>{user ? "Hello, " + user?.email : "Hello, Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((element) => (
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
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
