import React from "react";
import "../../styles/Table.scss";
import "./CategoryModule.scss";

import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalForm from "../ModalForm";
import CategoryTable from "./CategoryTable";

function CategoryModule() {

  const title = "Add New"
  const icon = <FiIcons.FiFilePlus size={23} className="pr-1" />

  return (
    <div className="category_module">
      <div>
        <strong>
          <h3>Masterfile - Cateory Module</h3>
        </strong>
      </div>
      <div className="w-full flex justify-end">
        <Link
          to="#"
          className="add_link btn btn-primary flex"
          data-toggle="tooltip"
          data-placement="left"
          title="Create New Category"
        >
          <div className="flex">
            <ModalForm title={title} icon={icon}/>
          </div>
        </Link>
      </div>
      <div className="px-4 pt-5 table-responsive">
        
            <CategoryTable />
      </div>
    </div>
  );
}

export default CategoryModule;
