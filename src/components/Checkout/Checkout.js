import React from "react";
import "./Checkout.scss";
import Subtotal from "../Subtotal/Subtotal";
import { checkoutAd } from "../../reducers/data";
import { useStateValue } from "../../reducers/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <section className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="checkout ad" />

        <main>
          <h3>{user ? "Hello, " + user?.email : "Hello, Guest"}</h3>
          {basket.length < 1?<h2 className="checkout__title">Your shopping Basket is empty</h2>:<h2 className="checkout__title">Your shopping Basket</h2>}

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

      <section className="checkout__right">
        <Subtotal />
      </section>
    </div>
  );
}

export default Checkout;
