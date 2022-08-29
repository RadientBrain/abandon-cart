import React, { useState, useCallback } from "react";
import Form from "usetheform";
import { Cart } from "./Cart";
import ReactJson from "react-json-view";

import "bulma/css/bulma.css";
import "./style.css";

export default function App() {
  const [formState, setFormState] = useState({});
  const [items, setCartItem] = useState([]);
  const [flagOrder, setFlagOrder] = useState([false]);

  const onRemoveItem = useCallback(
    (idToRemove) =>
      setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove)),
    []
  );
  const onAddItem = useCallback(() => {
    const item = createRandomItem();
    setCartItem((prev) => [...prev, item]);
  }, []);

  function onAbandonCheckout(event) {
    if (flagOrder !== true) {
      setTimeout(async function () {
        await alert(
          "#1 Please Place your order for " + JSON.stringify(formState)
        );
      }, 2000);
    }
    if (flagOrder !== true) {
      setTimeout(async function () {
        await alert(
          "#2 Please Place your order for " + JSON.stringify(formState)
        );
      }, 10000);
    }
    if (flagOrder !== true) {
      setTimeout(async function () {
        await alert(
          "#3 Please Place your order for " + JSON.stringify(formState)
        );
      }, 15000);
    }
  }

  const onPaceOrder = () => {
    setFlagOrder(true);
    alert("order Placed Successfully and flag is " + flagOrder);
  };

  return (
    <div className="App">
      <div className="box">
        <Form
          onSubmit={(state) => console.log(state)}
          onChange={(state) => setFormState(state)}
        >
          <Cart items={items} onRemoveItem={onRemoveItem} />
          <button type="submit" className="button is-small is-link">
            Submit
          </button>
        </Form>
        <br />
        <button
          type="button"
          className="button is-small is-success"
          onClick={onAddItem}
        >
          Add item to cart
        </button>
        <br />
        <br />
        <button
          type="button"
          className="button is-small is-success"
          onClick={onAbandonCheckout}
        >
          Abandon Checkout
        </button>
        <br />
        <br />
        <button
          type="button"
          className="button is-small is-success"
          onClick={onPaceOrder}
        >
          Place order
        </button>
      </div>
      <div className="box">
        <ReactJson src={formState} />
      </div>
    </div>
  );
}

let id = 0;
const createRandomItem = () => {
  id = id + 1;
  return {
    id,
    qty: 1,
    desc: `Item number: ${id}`,
    price: Number((Math.random() * 10 + 1).toFixed(2)),
  };
};
