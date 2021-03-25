import React from "react";
import DateNow from "../DateNow";
import SalesTable from "./SalesTable";
import "./SalesOrder.scss";

function SalesOrder() {
  return (
    <div className="sales_order">
      <div className="flex">
        <h3 className="w-full">
          Sales Management - <strong>Sales Module</strong>
        </h3>
        <div className="w-full flex justify-end">
          <DateNow />
        </div>
      </div>
      <div className="pt-5">
        <h4 className="text-xl font-bold">All Data</h4>
        <SalesTable />
      </div>
    </div>
  );
}

export default SalesOrder;
