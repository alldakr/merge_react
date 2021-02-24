import React from "react";
// react library for routing
import { useLocation, Route, Switch, Redirect, Link } from "react-router-dom";

// plugins styles from node_modules
// import "react-notification-alert/dist/animate.css";
// import "react-perfect-scrollbar/dist/css/styles.css";
// import "@fullcalendar/common/main.min.css";
// import "@fullcalendar/daygrid/main.min.css";
// import "sweetalert2/dist/sweetalert2.min.css";
// import "select2/dist/css/select2.min.css";
// import "quill/dist/quill.core.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// plugins styles downloaded
// import "assets/argon-dashboard/vendor/nucleo/css/nucleo.css";

// core styles
import "assets/argon-dashboard/scss/argon-dashboard-pro-react.scss?v1.2.0";
// import "assets/argon-dashboard/css/argon-dashboard-pro-react.css";

// core components
import AdminNavbar from "components/argon-dashboard/Navbars/AdminNavbar.js";
import AdminFooter from "components/argon-dashboard/Footers/AdminFooter.js";
import Sidebar from "components/argon-dashboard/Sidebar/Sidebar.js";

import routes from "routes/adminRoutes.js";

import { useAppContext } from "store";

import imgA from "assets/argon-dashboard/img/brand/argon-react.png";

function Admin() {
  const {
    store: { isAuthenticated },
  } = useAppContext();

  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

      if (prop.layout === "/admin" && isAuthenticated) {
        return (
          // <Link to="/admin" />
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // toggles collapse between mini sidenav and normal
  const toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };
  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/home",
          imgSrc: imgA,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme={getNavbarTheme()}
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
          brandText={getBrandText(location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/login" />
        </Switch>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

export default Admin;
