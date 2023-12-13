import React from "react";
import "./style/index.css";
import { Button, Col, Form, Input, Row } from "antd";
import truckImg from "../../assets/Truck.svg";
import logo from "../../assets/Logo.png";
import { COLOR } from "../../../Constant/Color";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
              SignUp
            </div>
            <Form
              className="registration-form"
              layout="vertical"
              autoComplete="off"
              style={{ width: "100%" }}
            >
              <Form.Item
                label="Full Name"
                name="Full Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Insert Full Name"
                  style={{ width: "100%" }}
                />
              </Form.Item>
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
                label="Designation"
                name="Designation"
                rules={[
                  {
                    required: true,
                    message: "Please input your Designation!",
                  },
                ]}
              >
                <Input
                  placeholder="Insert Your Designation"
                  style={{ width: "100%" }}
                />
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
              <Form.Item style={{marginTop:20}}>
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
                cursor: "pointer",
              }}
              onClick={()=>navigation("/")}
            >
              Already have an account?
              <span
                style={{
                  color: COLOR.color2,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                {" "}
                Login
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
