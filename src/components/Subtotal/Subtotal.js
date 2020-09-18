import React, { useEffect, useState } from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../reducers/StateProvider";
import { getBasketTotal } from "../../reducers/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [basketEmpty, setBasketEmpty] = useState(true);
  const history = useHistory();
  const [{ basket }] = useStateValue();

  useEffect(() => {
    if (basket.length < 1) {
      setBasketEmpty(true);
    } else {
      setBasketEmpty(false);
    }
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")} disabled={basketEmpty}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
