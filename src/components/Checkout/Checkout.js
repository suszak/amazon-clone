import React from "react";
import "./Checkout.scss";
import Subtotal from "../Subtotal/Subtotal";
import { checkoutAd } from "../../data";
import { useStateValue } from "../../StateProvider";
import Product from "../Product/Product";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((element, index) => (
            <Product
              id={element.id}
              title={element.title}
              image={element.image}
              price={element.price}
              rating={element.rating}
              key={index}
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
