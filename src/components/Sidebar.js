import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = (props) => {
  const { menuItems = [] } = props;

  const [selected, setSelectedMenuItem] = useState(menuItems[0].title);
  const [subMenuStates, setSubmenus] = useState({});

  //add index of menu items with submenus to state
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["selected"] = null;
      }
    });

    setSubmenus(newSubmenus);
    console.log(newSubmenus)
  }, [menuItems]);

  const handleMenuItemClick = (title, index) => {
    setSelectedMenuItem(title);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates));

    if (subMenuStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenuStates[index]["isOpen"];
      setSubmenus(subMenusCopy);
    }else{
      for(let item in subMenuStates){
        subMenusCopy[item]['isOpen'] = false;
        subMenusCopy[item]['selected'] = null
      }
      
    }
    setSubmenus(subMenusCopy);
    
  };

  const handleSubMenuItemClick = (menuItemIdx, subMenuItemIdx) => {
    const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates));

    subMenusCopy[menuItemIdx]['selected'] = subMenuItemIdx;
    setSubmenus(subMenusCopy);
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.title;

    const hasSubmenus = !!item.subMenuItems.length;
    const isOpen = subMenuStates[index]?.isOpen;
    //OR
    // const isOpen = subMenuStates[index] ? subMenuStates[index].isOpen : null;

    const subMenuJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        const isSubmenuItemSelected =
          subMenuStates[index]?.selected === subMenuItemIndex;
        return (
          <Link
            to={`${item.to}${subMenuItem.to}`}
            key={subMenuItemIndex}
            style={{ textDecoration: "none" }}
          >
            <div
              onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
              className="submenu_item hover:bg-red-300 hover:text-white pb-1 pl-1 rounded"
              style={
                isSubmenuItemSelected ? { backgroundColor: "red", color: "white", fontWeight:"bold" } : {}
              }
            >
              {subMenuItem.title}
            </div>
          </Link>
        );
      }
    );

    return (
      <div key={index}>
        <div className="input_option mb-3 rounded ">
          <Link
            to={item.to}
            onClick={() => handleMenuItemClick(item.title, index)}
            style={{ textDecoration: "none" }}
          >
            <div
              tabindex="1"
              className={`option flex hover:no-underline text-black rounded-md pl-2 hover:bg-red-400 relative ${isItemSelected ? "bg-red-600 text-white" : ""}`}
              // style={isItemSelected && isOpen ? {display: "null"} : {display: "block"}}
            >
              <item.icon className="self-center" />
              <strong>
                <h5 className="font-bold text-xs p-2 self-center">
                  {item.title}
                </h5>
              </strong>
              <div>
                {hasSubmenus && (
                  <div
                    style={isItemSelected ? { color: "white" } : {}}
                    className="absolute inset-y-0 right-0 text-gray-400 flex items-center"
                  >
                    {isOpen ? (
                      <MdIcons.MdKeyboardArrowUp size={15} />
                    ) : (
                      <MdIcons.MdKeyboardArrowDown size={15} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <div className="submenu_item_container text-xs pl-3 pb-3">
                {subMenuJSX}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  });

  return (
    <div className="sidebars flex justify-center">
      <div className="sidebars_option w-5/6 py-4 cursor-pointer ">
        {menuItemsJSX}
      </div>
    </div>
  );
};

export default Sidebar;
