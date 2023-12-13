import React from "react";
import "./style/index.css";
import { Button, Col, Form, Input, Row } from "antd";
import truckImg from "../../assets/Truck.svg";
import logo from "../../assets/Logo.png";
import { COLOR } from "../../../Constant/Color";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate()
  return (
    <div className="registration-backgorund">
      <Row style={{ height: "100vh" }}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "80vh", height: "90vh" }}
            src={truckImg}
            alt=""
          />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "30vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img style={{ width: 200, height: 100 }} src={logo} alt="" />
            <div
              style={{
                color: COLOR.color2,
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Login
            </div>
            <Form
              className="registration-form"
              layout="vertical"
              autoComplete="off"
              style={{ width: "100%" }}
            >
              <Form.Item
                label="Employee ID "
                name="Employee ID "
                rules={[
                  {
                    required: true,
                    message: "Please input your Employee ID!",
                  },
                ]}
              >
                <Input placeholder="Insert User ID" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Password "
                name="Password "
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Insert Code"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <div
                style={{
                  cursor: "pointer",
                  color: "#A7A7A7",
                  fontFamily: "Poppins",
                  fontSize: 12,
                  marginTop: 6,
                  marginBottom: 20,
                }}
              >
                Haven't received a password?
              </div>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    width: "100%",
                    color: "white",
                    backgroundColor: COLOR.color2,
                    outline: "none",
                    border: "none",
                  }}
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>
            <div
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "400",
                cursor:"pointer"
              }}
              onClick={()=>navigation("/signup")}
            >
              Don’t have an account?
              <span
                style={{
                  color: COLOR.color2,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
               {' '} Sign up
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
