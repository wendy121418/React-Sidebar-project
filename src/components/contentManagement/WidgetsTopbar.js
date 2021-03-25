import React from "react";
import WidgetsTopbarTable from "./WidgetsTopbarTable";

function WidgetsTopbar() {
  return (
    <div className="sales_order">
      <h3 className="w-full">
      CMS - <strong>Widgets (Topbar) </strong>
      </h3>

      <div className="pt-5">
        <WidgetsTopbarTable />
      </div>
    </div>
  );
}

export default WidgetsTopbar;
