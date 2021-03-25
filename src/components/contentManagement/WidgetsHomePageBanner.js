import React from "react";
import WidgetsHomePageBannerTable from "./WidgetsHomePageBannerTable";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import menu1 from "../../images/menu1.jpg";
import menu2 from "../../images/menu2.jpg";
import menu3 from "../../images/menu3.jpg";
import menu4 from "../../images/menu4.jpg";

import ImageHover from "../ImageHover";

function WidgetsHomePageBanner() {
  return (
    <div className="sales_order">
      <h3 className="w-full">
        Home Page Banner - <strong>List </strong>
      </h3>

      <div className="pt-5">
        <div>
          <WidgetsHomePageBannerTable />
        </div>
        <div className="pt-5">
          <div className="flex border-b-2 border-gray-300">
            <div className="flex items-center">
              <BsIcons.BsCardImage size={20} />
            </div>
            <h4 className="pl-2 text-xl">Image Gallery</h4>
          </div>
          <div className="flex w-full  h-full bg-red-60">
            <div className="w-1/3 p-1">
              <ImageHover
                image={menu1}
                to="#"
                searchIcon={<BsIcons.BsSearch />}
                penIcon={<BsIcons.BsPencil />}
                binIcon={<ImIcons.ImBin />}
              />
            </div>
            <div className="w-1/3 p-1">
              <ImageHover
                image={menu2}
                to="#"
                searchIcon={<BsIcons.BsSearch />}
                penIcon={<BsIcons.BsPencil />}
                binIcon={<ImIcons.ImBin />}
              />
            </div>
            <div className="w-1/3 p-1">
              <ImageHover
                image={menu3}
                to="#"
                searchIcon={<BsIcons.BsSearch />}
                penIcon={<BsIcons.BsPencil />}
                binIcon={<ImIcons.ImBin />}
              />
            </div>
            <div className="w-1/3 p-1">
              <ImageHover
                image={menu4}
                to="#"
                searchIcon={<BsIcons.BsSearch />}
                penIcon={<BsIcons.BsPencil />}
                binIcon={<ImIcons.ImBin />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetsHomePageBanner;
