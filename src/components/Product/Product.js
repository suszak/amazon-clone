import React from "react";
import "./Product.scss";
import { useStateValue } from "../../reducers/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
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

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
