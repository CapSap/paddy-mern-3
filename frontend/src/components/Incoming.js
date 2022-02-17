import React, { useState } from "react";
import UserSetter from "./UserSetter";
import fakeDBinfo from "./fakeDBinfo";

function Incoming(props) {
  return (
    <div className="pt-10">
      <h2>Orders/items inbound to: {props.currentStore}</h2>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Pickup Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Four Hour
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fakeDBinfo.map((x, i) => (
                    <>
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
                              <td className="text-sm font-medium text-gray-900">
                                Sending store: {z.sendingStore}
                              </td>
                              <td className="text-sm font-medium text-gray-900 ">
                                Request items: {z.item}
                              </td>
                              <td className="text-sm font-medium text-gray-900">
                                {z.status}
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : null}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incoming;
