import React, { useState } from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Expand from "react-expand-animated";
import "./Order.scss";

function Order({ date, basket, cost }) {
  const [opened, setOpened] = useState(false);

  const toggleVisibility = (opened) => {
    setOpened(!opened);
  };

  const transitions = ["height", "opacity", "background"];

  return (
    <div className="order">
      <header className="order__info">
        <p>
          <strong>Date: </strong>
          {date}
        </p>
        <p>
          <strong>Items: </strong>
          {basket.length}
        </p>

        <CurrencyFormat
          renderText={(value) => (
            <p>
              <strong>Subtotal: </strong> {value}
            </p>
          )}
          decimalScale={2}
          value={cost}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        {opened ? (
          <ExpandLessIcon onClick={() => toggleVisibility(opened)} />
        ) : (
          <ExpandMoreIcon onClick={() => toggleVisibility(opened)} />
        )}
      </header>
      <Expand open={opened} duration={500} transitions={transitions}>
        <main className="order__basket hidden">
          {basket.map((product) => (
            <CheckoutProduct
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              basketId={product.basketId}
              key={product.basketId}
            />
          ))}
        </main>
      </Expand>
    </div>
  );
}

export default Order;
