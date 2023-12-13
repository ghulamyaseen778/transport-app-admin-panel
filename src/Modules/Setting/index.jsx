import { Card, Col, Row } from "antd";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Setting = () => {
  return (
    <Card>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: 20,
          color: "#141414",
          fontWeight: "600",
        }}
      >
        Settings
      </div>
      <Row style={{ marginTop: 10 }}>
        <Col span={16}>
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(25, 58, 83, 0.10)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "600",
                padding: "0 10px",
                color: "#193A53",
              }}
            >
              Account Setting{" "}
            </div>
            <div>
              <IoIosArrowDown size={20} color="#193A53" />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(25, 58, 83, 0.10)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "600",
                padding: "0 10px",
                color: "#193A53",
              }}
            >
              Password & Security{" "}
            </div>
            <div>
              <IoIosArrowDown size={20} color="#193A53" />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(25, 58, 83, 0.10)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "600",
                padding: "0 10px",
                color: "#193A53",
              }}
            >
              Privacy Policy{" "}
            </div>
            <div>
              <IoIosArrowDown size={20} color="#193A53" />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(25, 58, 83, 0.10)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "600",
                padding: "0 10px",
                color: "#193A53",
              }}
            >
              Notification Setting{" "}
            </div>
            <div>
              <IoIosArrowDown size={20} color="#193A53" />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(25, 58, 83, 0.10)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "600",
                padding: "0 10px",
                color: "#193A53",
              }}
            >
              Help & Support{" "}
            </div>
            <div>
              <IoIosArrowDown size={20} color="#193A53" />
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Setting;
