import React, { useState } from "react";
import StoreChooser from "./StoreChooser";
import fakeDBinfo from "./fakeDBinfo";

function Incoming(props) {
  return (
    <div>
      <h2>Orders/items inbound to: {props.currentStore}</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Pickup Location</th>
            <th scope="col">Status</th>
            <th scope="col">Four Hour</th>
            <th scope="col">Role</th>
            <th scope="col">
              <span>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {fakeDBinfo.map((x, i) => (
            <div className="incoming" key={i}>
              {x.pickupLocation == props.currentStore ? (
                <>
                  <tr key={i}>
                    <td>{x.orderNumber}</td>
                    <td>{x.customerName}</td>
                    <td>{x.pickupLocation}</td>
                    <td>Number of parcels: {x.orderedItems.length}</td>
                  </tr>
                  {x.orderedItems.map((z) => (
                    <tr key={x.orderNumber + z.sendingStore}>
                      <td>Sending store: {z.sendingStore}</td>
                      <td>Request items: {z.item}</td>
                      <td>{z.status}</td>
                    </tr>
                  ))}
                </>
              ) : null}
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Incoming;
