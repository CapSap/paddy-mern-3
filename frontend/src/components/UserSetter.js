import React, { useState } from "react";
import Todos from "./Todos";
import fakeDBinfo from "./fakeDBinfo";

function UserSetter() {
  const [store, setStore] = useState("Parramatta");

  function handleChange(e) {
    setStore(e.target.value);
  }

  const testArray = [
    { number: 1 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  return (
    <div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="storeChooser"
          className="block text-sm font-medium text-gray-700"
        >
          Set store location here:{" "}
        </label>
        <div className="col-span-6 sm:col-span-3">
          <select
            id="storeChooser"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={store}
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
        </div>
      </div>
      <Todos currentStore={store} fakeDBinfo={fakeDBinfo} />

      <div>
        {/* {testArray.map((x, i) => (
          <div key={i}>{x.number}</div>
        ))} */}
      </div>
    </div>
  );
}

export default UserSetter;
