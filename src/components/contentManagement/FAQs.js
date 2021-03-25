import React from "react";
import "../../styles/Table.scss";
import "./FAQs.scss";

import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import FAQsModal from "./FAQsModal";
import FAQsTable from "./FAQsTable";

function FAQs() {

  const title = "Add New"
  const icon = <FiIcons.FiFilePlus size={23} className="pr-1" />

  return (
    <div className="faqs">
      <div>
        
          <h3>CMS - <strong>FAQs Module</strong></h3>
        
      </div>
      <div className="w-full flex justify-end">
        <Link
          to="#"
          className="add_link btn btn-primary flex"
          data-toggle="tooltip"
          data-placement="left"
          title="Create New Product"
        >
          <div className="flex">
            <FAQsModal title={title} icon={icon}/>
          </div>
        </Link>
      </div>
      <div className="px-4 pt-5 h-full">
        
                <FAQsTable />
            
      </div>
    </div>
  );
}

export default FAQs;
