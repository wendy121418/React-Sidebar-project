import React from "react";
import PagesTable from "./PagesTable";

function Pages() {
  return (
    <div className="sales_order h-screen">
      <h3 className="w-full">
      CMS - <strong>Pages Module </strong>
      </h3>

      <div className="pt-5">
        <PagesTable />
      </div>
    </div>
  );
}

export default Pages;
