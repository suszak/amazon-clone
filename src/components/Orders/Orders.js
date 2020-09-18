import React from "react";
import { useStateValue } from "../../reducers/StateProvider";
import Order from "../Order/Order";
import "./Orders.scss";

function Orders() {
  const [{ orders }] = useStateValue();

  return (
    <div className="orders">
      {orders.map((order, index) => (
        <Order
          date={order.date}
          basket={order.basket}
          cost={order.cost}
          key={index}
        />
      ))}
    </div>
  );
}

export default Orders;
