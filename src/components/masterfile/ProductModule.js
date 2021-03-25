import React from "react";
import "../../styles/Table.scss";
import "./CategoryModule.scss";

import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalProduct from "./ModalProduct";
import ProductTable from "./ProductTable";

function ProductModule() {

  const title = "Add New"
  const icon = <FiIcons.FiFilePlus size={23} className="pr-1" />

  return (
    <div className="category_module">
      <div>
        
          <h3>Product - <strong>List</strong></h3>
        
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
            <ModalProduct title={title} icon={icon}/>
          </div>
        </Link>
      </div>
      <div className="px-4 pt-5 h-full">
        
                <ProductTable />
            
      </div>
    </div>
  );
}

export default ProductModule;
