import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import Nav from "../AppNav/VerticalNavWrapper";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo";

import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import { Link } from 'react-router-dom';
class AppSidebar extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      enableSidebarShadow,
      backgroundImage,
      backgroundImageOpacity,
    } = this.props;

    return (
      <Fragment>
        <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar}/>
        <CSSTransitionGroup component="div"
          className={cx("app-sidebar", backgroundColor, {
            "sidebar-shadow": enableSidebarShadow,
          })}
          transitionName="SidebarAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>
          <HeaderLogo />
          <PerfectScrollbar>
            <div className="app-sidebar__inner">
            <Link to="/dashboards/sales">testing</Link><br></br>
            <Link to="/dashboards/analytics">testing2</Link><br></br>
            <Link to="/dashboards/commerce">testing3</Link><br></br>
              {/* <Nav /> */}
            </div>
          </PerfectScrollbar>
          <div className={cx("app-sidebar-bg", backgroundImageOpacity)}
            style={{
              backgroundImage: enableBackgroundImage
                ? "url(" + backgroundImage + ")"
                : null,
            }}>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage,
  backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
