import React, { useState } from "react";
import Todos from "./Todos";
import fakeDBinfo from "./fakeDBinfo";
import Incoming from "./Incoming";

function UserSetter() {
  const [store, setStore] = useState("Parramatta");

  function handleChange(e) {
    setStore(e.target.value);
  }

  return (
    <div className="UserSetter">
      <label htmlFor="storeChooser">Set store location here: </label>
      <select
        id="storeChooser"
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
      <Todos currentStore={store} fakeDBinfo={fakeDBinfo} />

      <Incoming currentStore={store} fakeDBinfo={fakeDBinfo} />
    </div>
  );
}

export default UserSetter;
