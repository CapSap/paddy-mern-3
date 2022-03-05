import React, { useState } from "react";

function Entry() {
  const [orderInfo, setOrderInfo] = useState({
    orderNumber: "",
    customerName: "",
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    orderedItems: [
      {
        sendingStore: "Canberra",
        date: "",
        posted: false,
        item: "",
      },
    ],
    fourHour: false,
    notes: "",
  });

  const [itemCounter, setItemCounter] = useState(1);

  function handleChange(e) {
    let name = e.target.id;
    setOrderInfo({
      ...orderInfo,
      [name]: e.target.value,
    });
  }
  // this function handles changing the item request in state. cause its an array a few things are different
  function handleOrderedItemsChange(e) {
    let index = e.target.id;
    let stateName = e.target.previousElementSibling.htmlFor;
    let prevArr = orderInfo.orderedItems;

    prevArr[index][stateName] = e.target.value;
    setOrderInfo({
      ...orderInfo,
      orderedItems: prevArr,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(orderInfo));
    fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    });
  }

  const itemRequester = [];
  for (let i = 0; i < itemCounter; i++) {
    itemRequester.push(
      <>
        <label htmlFor="item">Items needed: </label>
        <textarea
          id={i}
          key={"item" + i}
          onChange={(e) => {
            handleOrderedItemsChange(e);
          }}
        />
        <label htmlFor="sendingStore">Sending Store: </label>
        <select
          id={i}
          key={"sendingStore" + i}
          value={orderInfo.orderedItems[i].sendingStore}
          onChange={(e) => {
            handleOrderedItemsChange(e);
          }}
        >
          <option value="Canberra">Canberra - 213</option>
          <option value="Fortitude Valley">Fortitude Valley - 416</option>
          <option value="Hobart">Hobart - 710</option>
          <option value="Melbourne">Melbourne - 314</option>
          <option value="Parramatta">Parramatta - 208</option>
          <option value="Perth">Perth - 615</option>
          <option value="Ringwood">Ringwood - 319</option>
          <option value="Sydney">Sydney - 210</option>
        </select>
        <br />
      </>
    );
  }

  function handleClick(e) {
    e.preventDefault();
    setItemCounter(itemCounter + 1);
    let prevState = orderInfo.orderedItems;
    const newRequest = {
      sendingStore: "Canberra",
      date: "",
      posted: false,
      item: "",
    };
    prevState.push(newRequest);
    setOrderInfo({
      ...orderInfo,
      orderedItems: prevState,
    });
  }

  return (
    <div key="CNC-App">
      <div>
        <h3>Paddy CNC app</h3>
        <p>Requests to stores can be inputed here </p>
      </div>
      <form method="POST" action="/" onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor="orderNumber">Order Number </label>
        <input
          type="text"
          name="orderNumber"
          id="orderNumber"
          value={orderInfo.orderNumber}
          onChange={(e) => handleChange(e)}
          autoComplete="given-name"
        />
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          value={orderInfo.customerName}
          onChange={(e) => handleChange(e)}
          autoComplete="family-name"
        />
        <label htmlFor="pickupLocation">Pickup Location: </label>
        <select
          id="pickupLocation"
          value={orderInfo.pickupLocation}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="Canberra">Canberra - 213</option>
          <option value="Fortitude Valley">Fortitude Valley - 416</option>
          <option value="Hobart">Hobart - 710</option>
          <option value="Melbourne">Melbourne - 314</option>
          <option value="Parramatta">Parramatta - 208</option>
          <option value="Perth">Perth - 615</option>
          <option value="Ringwood">Ringwood - 319</option>
          <option value="Sydney">Sydney - 210</option>
        </select>{" "}
        <label htmlFor="fourHour">4 Hour? </label>
        <input
          id="fourHour"
          name="fourHour"
          type="checkbox"
          value={orderInfo.fourHour}
          onChange={(e) => handleChange(e)}
        ></input>
        <div>
          Make multiple requests:{" "}
          <button onClick={(e) => handleClick(e)}> Get more requests</button>
        </div>
        {itemRequester}
        <button type="submit">Send order/request to store</button>
      </form>
    </div>
  );
}

export default Entry;
