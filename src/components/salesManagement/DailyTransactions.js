import React from "react";
import DateNow from "../DateNow";
import DailyTransactionsTable from "./DailyTransactionsTable";

function DailyTransactions() {
  return (
    <div className="sales_order">
        <div className="flex">
        <h3 className="w-full">
        Sales Management - <strong>Daily Transactions</strong>
        </h3>
        <div className="w-full flex justify-end">
          <DateNow />
        </div>
      </div>
      <div className="pt-5">
        <h4 className="text-xl font-bold">
          List of Products for March 22, 2021 Orders
        </h4>
        <DailyTransactionsTable />
      </div>
    </div>
  );
}

export default DailyTransactions;
