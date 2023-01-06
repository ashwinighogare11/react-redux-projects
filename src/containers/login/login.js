import React from "react";
import {
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Input, Tooltip, Button, Checkbox, Form, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { getLogin } from "./actions";
import login_image from "../../images/login-image.jpeg";
import "../../App.css";
import "./login.css";

const Login = () => {
  //use to invoke redux actions
  const dispatch = useDispatch();
  const onFinish = (data) => {
    console.log("Success:", data);
    const userDetails = { username: data.email, password: data.password };
    dispatch(getLogin(userDetails));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={2} offset={4}>
                <img
                  src={login_image}
                  alt="Login"
                  className="login-image"
                ></img>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <h2>
              <span>Business Wire</span>
              <span> Login</span>
            </h2>
            <div>Welcome back! Please enter your details.</div>
            <br></br>
            <Row>
              <Col span={14} offset={4}>
                <div>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email Address!",
                      },
                    ]}
                  >
                    <Input
                      placeholder=" Your Email Address"
                      suffix={
                        <Tooltip title="User Email information">
                          <InfoCircleOutlined
                            style={{
                              color: "rgba(0,0,0,.45)",
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={14} offset={4}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="input password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={14} offset={4}>
                <Form.Item
                  name="remember"
                  valuePropName="Unchecked"
                  wrapperCol={{
                    offset: 4,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me for future visit</Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={14} offset={4}>
                <Form.Item
                  wrapperCol={{
                    offset: 2,
                    span: 18,
                  }}
                >
                  <Button block type="primary" htmlType="submit">
                    Continue
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={14} offset={4}>
                <div>
                  <a href="/portal/site/home/template.FORGOT_PASSWORD/">
                    Forgot your password?
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={4}>
                <input
                  type="hidden"
                  id="login_url"
                  name="login_url"
                  value=""
                ></input>
                <div>
                  Don't have an account? Register now to access news releases
                  archived for 30 days. It's quick, confidential and free!
                </div>
              </Col>
            </Row>
            <br />
            <div>
              <Row>
                <Col span={14} offset={4}>
                  <Form.Item
                    wrapperCol={{
                      offset: 2,
                      span: 18,
                    }}
                  >
                    <Button block>Register now</Button>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Form>
  );
};
export default Login;
