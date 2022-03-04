import React, { useState } from "react";
import fakeDBinfo from "./fakeDBinfo";

function Todos(props) {
  return (
    <div>
      <h2>To dos for: {props.currentStore}</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Pickup Location</th>
            <th scope="col">Ibt</th>
            <th scope="col">Tracking </th>
            <th scope="col">Update Order</th>
            <th scope="col">Order no</th>
            <th scope="col">Link</th>
            <th scope="col">Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {props.ordersFromDB === "not loaded"
            ? null
            : props.ordersFromDB.map((x, i) => (
                <>
                  {x.orderedItems.map((y, index) =>
                    y.sendingStore == props.currentStore ? (
                      <>
                        <tr key={i + index}>
                          <td>{y.item}</td>
                          <td>{y.qty}</td>
                          <td>{x.pickupLocation}</td>
                          <td>
                            <input
                              type="text"
                              placeholder="IBT goes here"
                            ></input>
                          </td>
                          <td>
                            <input type="text" placeholder="Tracking"></input>
                          </td>
                          <td>
                            <select>
                              <option>Not Touched</option>
                              <option>Store staff working on it</option>
                              <option>Out of Stock</option>
                              <option>Posted/IBT done</option>
                            </select>
                            <button> Update Order</button>
                          </td>
                          <td> {x.orderNumber}</td>
                          <td>
                            <a href="#">link to order</a>
                          </td>

                          <td>{x.customerName}</td>
                          <td>Customer Name: {x.customerName}</td>
                          <td>Customer Name: {x.customerName}</td>
                          <td>Customer Name: {x.customerName}</td>
                          <td>Customer Name: {x.customerName}</td>
                        </tr>
                      </>
                    ) : null
                  )}
                </>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
