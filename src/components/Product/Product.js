import React from "react";
import "./Product.scss";
import { useStateValue } from "../../reducers/StateProvider";
import { store } from "react-notifications-component";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = (store) => {
    //  dispatch the item into the data layer
    //  create unique key for each basketItem
    const date = new Date(),
      formatedDate = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
      ].join("");

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        basketId: formatedDate,
      },
    });

    store.addNotification({
      title: "Added to basket!",
      message: title + " added to basket",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return (
    <div className="product">
      <main className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="Star" key={i}>
                ⭐
              </span>
            ))}
        </div>
      </main>

      <img src={image} alt="product" />

      <button onClick={() => addToBasket(store)}>Add to Basket</button>
    </div>
  );
}

export default Product;
