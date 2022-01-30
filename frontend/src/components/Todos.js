import React, { useState } from "react";
import UserSetter from "./UserSetter";
import fakeDBinfo from "./fakeDBinfo";

function Todos(props) {
  const rendering = fakeDBinfo.map((x) => {
    x.orderedItems.map((y) => {
      if (y.sendingStore === props.currentStore) {
        return y.sendingStore;
      }
    });
  });
  console.log(rendering);
  return (
    <div>
      <h2>To dos for: {props.currentStore}</h2>
      <ul>
        {fakeDBinfo.map((x, i) => (
          <li key={i}>
            {x.orderedItems.map((y) => y.sendingStore) == props.currentStore ? (
              <div>
                Order number: {x.orderNumber}
                Pickup Location: {x.pickupLocation} <br />
                items needed: {x.orderedItems.map((x) => `${x.item}`)}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
