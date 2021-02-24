import React from "react";
// react library for routing
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

// plugin components

// Nav/Footer components
import Footer6 from "components/argon-design/footers/Footer6.js";
import NavbarPrimary from "components/argon-design/navbars/NavbarPrimary.js";
import Header from "components/argon-design/headers/Header.js";

// Routes components
import routes from "routes/mainRoutes.js";

function Main() {
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/main") {
        return <Route path={prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <NavbarPrimary />
      <div className="main-content" ref={mainContentRef}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
      <Footer6 />
    </>
  );
}

export default Main;
