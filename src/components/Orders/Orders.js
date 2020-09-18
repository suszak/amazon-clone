import React from "react";
import { useStateValue } from "../../reducers/StateProvider";
import Order from "../Order/Order";
import "./Orders.scss";

function Orders() {
  const [{ orders }] = useStateValue();

  return (
    <div className="orders">
      {orders.length < 1 ? (
        <h1>You didn't buy anything yet.</h1>
      ) : (
        orders.map((order, index) => (
          <Order
            date={order.date}
            basket={order.basket}
            cost={order.cost}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default Orders;
