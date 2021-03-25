import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Dashboard from "./components/Dashboard";
import Masterfile from "./components/navigator/Masterfile";
import SalesManagement from "./components/navigator/SalesManagement";
import ContentManagement from "./components/navigator/ContentManagement";
import UserManagement from "./components/navigator/UserManagement";
import SystemSetting from "./components/navigator/SystemSetting";
import MasterfileContainer from "./components/navigator/MasterfileContainer";
import SalesManagementContainer from "./components/navigator/SalesManagementContainer";
import ContentManagementContainer from "./components/navigator/ContentManagementContainer";
import UserManagementContainer from "./components/navigator/UserManagementContainer";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />

      <Route exact path="/masterfile" component={Masterfile} />
      <Route exact path="/masterfile/:masterfile_container" component={MasterfileContainer} />

      <Route exact path="/sales_management" component={SalesManagement} />
      <Route exact path="/sales_management/:sales_management_container" component={SalesManagementContainer} />

      <Route exact path="/content_management" component={ContentManagement} />
      <Route exact path="/content_management/:content_management_container" component={ContentManagementContainer} />

      <Route exact path="/user_management" component={UserManagement} />
      <Route exact path="/user_management/:user_management_container" component={UserManagementContainer} />

      <Route exact path="/system_setting" component={SystemSetting} />

      

      
    </Switch>
  );
}

export default Routes;
