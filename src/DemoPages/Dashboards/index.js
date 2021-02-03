import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics/";
import SalesDashboard from "./Sales/";
import CommerceDashboard from "./Commerce/";
import CRMDashboard from "./CRM/";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
import { Link } from 'react-router-dom';
const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      {/* <Link to="/dashboards/sales">testing</Link>
      <Link to="/dashboards/analytics">testing2</Link>
      <Link to="/dashboards/commerce">testing3</Link> */}
      <div className="app-main__outer">
        <div className="app-main__inner">
        {/* <Route path='/dashboards/sales' component={SalesDashboard} />
        <Route path='/dashboards/analytics' component={CommerceDashboard} />
        <Route path='/dashboards/commerce' component={CRMDashboard} /> */}
          <Route path={`${match.url}/analytics`} component={AnalyticsDashboard}/>
          <Route path={`${match.url}/sales`} component={SalesDashboard} />
          <Route path={`${match.url}/commerce`} component={CommerceDashboard} />
          <Route path={`${match.url}/crm`} component={CRMDashboard} />
          <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
