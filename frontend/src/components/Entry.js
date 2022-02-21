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
      },
    ],
    fourHour: false,
  });

  function handleChange(e) {
    let name = e.target.id;
    setOrderInfo({
      ...orderInfo,
      [name]: e.target.value,
    });
  }

  function handleOrderedItemsChange(e) {
    let name = e.target.id;
    setOrderInfo({
      ...orderInfo,
      orderedItems: {
        ...orderInfo.orderedItems,
        [name]: e.target.value,
      },
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(orderInfo));
    fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    });
  }

  return (
    <div>
      <div>
        <h3>Paddy CNC app</h3>
        <p>Requests to stores can be inputed here </p>
      </div>
      <form method="POST" action="/" onSubmit={(e) => onSubmit(e)}>
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
        </select>
        <label htmlFor="fourHour">4 Hour? </label>
        <input
          id="fourHour"
          name="fourHour"
          type="checkbox"
          value={orderInfo.fourHour}
          onChange={(e) => handleChange(e)}
        ></input>
        <div>
          Make multiple requests: <button> Get more requests</button>
        </div>

        <label htmlFor="items">Items needed: </label>
        <textarea
          id="item"
          onChange={(e) => {
            handleOrderedItemsChange(e);
          }}
        />
        <label htmlFor="sendingStore">Sending Store: </label>
        <select
          id="sendingStore"
          value={orderInfo.sendingStore}
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
        </select>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Entry;
