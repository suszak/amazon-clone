import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../reducers/StateProvider";

function CheckoutProduct({ image, title, price, rating, basketId }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      basketId,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />

      <main className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="Star" key={i}>
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </main>
    </div>
  );
}

export default CheckoutProduct;
