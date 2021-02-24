import React, { useEffect, useState } from "react";
import { axiosInstance, useAxios } from "api";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useAppContext, setToken, setIsStaff } from "store";
import { notification } from "antd";

import googleImg from "assets/argon-design/img/icons/common/google.svg";
import gitHubImg from "assets/argon-design/img/icons/common/github.svg";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components
function LoginCard1() {
  const { dispatch } = useAppContext();
  const location = useLocation();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocus, setEmailFocus] = React.useState("");
  const [passwordFocus, setPasswordFocus] = React.useState("");

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/admin/dashboard" },
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    async function fn() {
      const data = { username: username, password: password };
      try {
        const response = await axiosInstance.post("/accounts/token/", data);
        const {
          data: { access: jwtToken, is_staff },
        } = response;
        dispatch(setToken(jwtToken));
        dispatch(setIsStaff(is_staff));

        notification.open({
          message: "로그인 성공",
          description: "Admin 페이지로 이동합니다.",
        });
        document.location.href = "/admin/dashboard";
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "아이디/암호를 확인해주세요.",
          });
        }
      }
    }
    fn();
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Login with credentials</small>
          </div>
          <Form>
            <FormGroup className={"mb-3 " + emailFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  name="username"
                  onChange={handleChange}
                  onFocus={() => setEmailFocus("focused")}
                  onBlur={() => setEmailFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <FormGroup className={passwordFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onFocus={() => setPasswordFocus("focused")}
                  onBlur={() => setPasswordFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin2"
                type="checkbox"
              ></input>
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin2"
              >
                <span className="text-default opacity-5">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button
                className="my-4"
                color="primary"
                onClick={handleSubmitForm}
              >
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LoginCard1;
