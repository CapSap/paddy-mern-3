import React, { useState } from "react";

function Entry() {
  const [orderInfo, setOrderInfo] = useState({
    orderNumber: "",
    customerName: "",
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    orderedItems: {
      sendingStore: "Canberra",
    },
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
    <div className="bg-slate-200">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Paddy CNC app
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Requests to stores can be inputed here{" "}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-neutral-50 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="orderNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Order Number{" "}
                      </label>
                      <input
                        type="text"
                        name="orderNumber"
                        id="orderNumber"
                        value={orderInfo.orderNumber}
                        onChange={(e) => handleChange(e)}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="customerName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={orderInfo.customerName}
                        onChange={(e) => handleChange(e)}
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="pickupLocation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pickup Location:{" "}
                      </label>
                      <div className="col-span-6 sm:col-span-3">
                        <select
                          id="pickupLocation"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={orderInfo.pickupLocation}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          <option value="Canberra">Canberra - 213</option>
                          <option value="Fortitude Valley">
                            Fortitude Valley - 416
                          </option>
                          <option value="Hobart">Hobart - 710</option>
                          <option value="Melbourne">Melbourne - 314</option>
                          <option value="Parramatta">Parramatta - 208</option>
                          <option value="Perth">Perth - 615</option>
                          <option value="Ringwood">Ringwood - 319</option>
                          <option value="Sydney">Sydney - 210</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="fourHour"
                        className=" font-medium text-gray-700 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        4 Hour?{" "}
                      </label>
                      <input
                        id="fourHour"
                        name="fourHour"
                        type="checkbox"
                        value={orderInfo.fourHour}
                        onChange={(e) => handleChange(e)}
                      ></input>
                    </div>
                    <div className="col-span-6">line break?</div>
                    <div className="col-start-5 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="items"
                        className="block text-sm font-medium text-gray-700 "
                      >
                        Items needed:{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="item"
                          onChange={(e) => {
                            handleOrderedItemsChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
