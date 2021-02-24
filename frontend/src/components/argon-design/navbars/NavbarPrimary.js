import "bootstrap/dist/css/bootstrap.css";
import "assets/argon-design/css/nucleo-svg.css";
import "assets/argon-design/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "assets/argon-design/css/argon-design-system.css";

import "assets/argon-design/scss/argon-design-system.scss?v1.0.0";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// reactstrap components
import { notification } from "antd";

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// import ImgA from "assets/argon-design/img/DataMarketingCampus_Logo.png";
import ImgA from "assets/argon-design/logo.png";
import { useAppContext, deleteToken } from "store";

// Core Components
function NavbarPrimary() {
  const location = useLocation();
  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/home" },
  };

  const {
    dispatch,
    store: { isAuthenticated },
  } = useAppContext();
  const history = useHistory();
  const handleClick = (path) => {
    if (path === "/logout") {
      dispatch(deleteToken());
      notification.open({
        message: "로그아웃 성공",
        description: "Main 페이지로 이동합니다.",
      });
      history.push(loginRedirectUrl);
    } else {
      history.push(path);
    }
  };

  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
      <Navbar className="navbar-nav bg-white" expand="lg">
        <Container>
          <NavbarBrand onClick={() => handleClick("/home")}>
            <img alt=".." src={ImgA} />
          </NavbarBrand>

          <button
            className="navbar-toggler"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Collapse isOpen={collapseOpen} navbar>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img alt="..." src={ImgA} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapseOpen(!collapseOpen)}
                  ></button>
                </Col>
              </Row>
            </div>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink onClick={() => handleClick("/intro")}>
                  {/* <i className="ni ni-align-center text-info"></i> */}
                  데이터마케팅캠퍼스 소개
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleClick("/offlineEdu")}>
                  오프라인
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleClick("/onlineEdu")}>
                  온라인
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleClick("/dmkHall")}>
                  데마코홀 대관
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleClick("/community")}>
                  커뮤니티
                </NavLink>
              </NavItem>
              {isAuthenticated && (
                <NavItem>
                  <NavLink onClick={() => handleClick("/mypage")}>
                    My Page
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink onClick={() => handleClick("/customEdu")}>
                  기업 맞춤 교육
                </NavLink>
              </NavItem>
              {(isAuthenticated && (
                <NavItem>
                  <NavLink onClick={() => handleClick("/logout")}>
                    로그아웃
                  </NavLink>
                </NavItem>
              )) || (
                <NavItem>
                  <NavLink onClick={() => handleClick("/login")}>
                    로그인
                  </NavLink>
                </NavItem>
              )}
              {
                !isAuthenticated && (
                  <NavItem>
                    <NavLink onClick={() => handleClick("/signup")}>
                      회원가입
                    </NavLink>
                  </NavItem>
                )
                // || (
                // <NavItem>
                //   <NavLink
                //     onClick={() =>
                //       (document.location.href = "/admin/dashboard")
                //     }
                //   >
                //     Dashboard
                //   </NavLink>
                // </NavItem>
                // )
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPrimary;
