import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const { menuItems = [] } = props;

  const menuItemJSX = menuItems.map((item, index) => {
    return (
      <div key={index} className="input_option mb-3 rounded">
        <Link to={item.subMenuItems.subSubMenuItems.to}>
        <div
          tabindex="1"
          className="option flex hover:no-underline text-black rounded-md pl-2 hover:bg-red-400  focus:bg-red-600 focus:text-white"
        >
          <item.icon className="self-center" />
          <strong>
            <h5 style={{textDecoration:"none"}} className="font-bold text-xs p-2 self-center">{item.subMenuItems.subSubMenuItems.title}</h5>
          </strong>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div>
        {menuItemJSX}
      </div>
    </div>
  );
};

export default Navbar;
