import "./styles/App.scss";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as BscIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

/* Components */
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ViewContainer from "./components/ViewContainer";

function App() {
  const menuItems = [
    {
      title: "Dashboard",
      to: "/",
      icon: AiIcons.AiOutlineHome,
      subMenuItems: [],
    },
    {
      title: "Masterfile",
      to: "/masterfile",
      icon: HiIcons.HiOutlinePhotograph,
      subMenuItems: [
        { title: "Category Module", to: "/category_module" },
        { title: "Sub-category Module", to: "/sub_category_module" },
        { title: "Product Module", to: "/product_module" },
      ],
    },
    {
      title: "Sales Management",
      to: "/sales_management",
      icon: FaIcons.FaRegMoneyBillAlt,
      subMenuItems: [
        { title: "Sales Order", to: "/sales_order" },
        { title: "Daily Transactions", to: "/daily_transactions" },
      ],
    },
    {
      title: "Content Management",
      to: "/content_management",
      icon: MdIcons.MdContentPaste,
      subMenuItems: [
        {
          title: "Widgets",
          to: "/widgets",
          subSubMenuItems: [
            { title: "Topbar", to: "/topbar" },
            { title: "Home Page Banner", to: "/home_page_banner" },
            { title: "Ad Manager", to: "/ad_manager" },
            { title: "Header Banner", to: "/header_banner" },
          ],
        },
        { title: "Pages", to: "/pages" },
        { title: "FAQs", to: "/faqs" },
      ],
    },
    {
      title: "User Management",
      to: "/user_management",
      icon: BscIcons.BsPeople,
      subMenuItems: [
        { title: "User Account Management", to: "/user_account_management" },
        { title: "Admin Account Management", to: "/admin_account_management" },
        { title: "Subscriber Management", to: "/subscriber_management" },
      ],
    },
    {
      title: "System Setting",
      to: "/system_setting",
      icon: AiIcons.AiOutlineSetting,
      subMenuItems: [],
    },
  ];

  return (
    <div className="app-main w-full flex justify-center">
      <div className="h-full w-11/12">
        <Header />

        <div className="app_body">
          <Sidebar menuItems={menuItems} />
          <div className="view_container w-full h-full bg-blue-100 p-7">
            <ViewContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
