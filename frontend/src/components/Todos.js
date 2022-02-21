import React, { useState } from "react";
import UserSetter from "./UserSetter";
import fakeDBinfo from "./fakeDBinfo";

function Todos(props) {
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div>
      <h2>To dos for: {props.currentStore}</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">SKU</th>
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
          {fakeDBinfo.map((x, i) => (
            <>
              {x.orderedItems.map((y, index) =>
                y.sendingStore == props.currentStore ? (
                  <>
                    <tr key={i}>
                      <td>{y.item}</td>
                      <td>{y.qty}</td>
                      <td>{x.pickupLocation}</td>
                      <td>
                        <input type="text" placeholder="IBT goes here"></input>
                      </td>
                      <td>
                        <input type="text" placeholder="Tracking"></input>
                      </td>
                      <td>
                        <select>
                          <option>Not Touched</option>
                          <option>Store staff working on it</option>
                          <option>Posted Out</option>
                          <option>IBT Done</option>
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
