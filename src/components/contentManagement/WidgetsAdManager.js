import React from "react";
import WidgetsAdManagerTable from "./WidgetsAdManagerTable";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import menu1 from "../../images/menu1.jpg";
import menu2 from "../../images/menu2.jpg";
import menu3 from "../../images/menu3.jpg";
import menu4 from "../../images/menu4.jpg";

import ImageHover from "../ImageHover";

function WidgetsAdManager() {
  return (
    <div className="sales_order h-screen">
      <h3 className="w-full">
      CMS - <strong>Widgets (Ad Manager) </strong>
      </h3>

      <div className="pt-5">
        <div>
          <WidgetsAdManagerTable />
        </div>
        <div className="pt-5">
          <div className="flex border-b-2 border-gray-300">
            <div className="flex items-center">
              <BsIcons.BsCardImage size={20} />
            </div>
            <h4 className="pl-2 text-xl">Image Gallery</h4>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WidgetsAdManager;
