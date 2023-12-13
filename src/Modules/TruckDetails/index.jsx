import { Card, Col, Row } from "antd";
import React from "react";
import img from "../../assets/fleetTruckDetail.png";
import { COLOR } from "../../../Constant/Color";
import avatar from "../../assets/avatar.png";
import email from "../../assets/emailIcon.png";
import Phone from "../../assets/phoneIcon.png";

const TruckDetails = () => {
  return (
    <Row gutter={12}>
      <Col span={16}>
        <Card>
          <div
            style={{
              fontSize: 18,
              fontFamily: "Poppins",
              color: "#141414",
              fontWeight: "600",
            }}
          >
            Truck Details{" "}
          </div>
          <Row style={{ marginTop: 10 }} gutter={12}>
            <Col span={12}>
              <img style={{ width: "100%" }} src={img} alt="" />
            </Col>
            <Col span={12}>
              <di6
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: 18,
                  color: "#193A53",
                }}
              >
                Fleet ID: <span style={{ fontWeight: "600" }}>45678</span>{" "}
              </di6>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: 18,
                  color: "#193A53",
                }}
              >
                Status:{" "}
                <span style={{ fontWeight: "600", color: "#5DC002" }}>
                  Online
                </span>
              </div>
            </Col>
            <div
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "#E9EAEC",
                margin: "20px 0",
              }}
            ></div>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Stop
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    2{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Distance
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    399 km{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  insurance renewal date
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    20/12/2023{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Previous Stop
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    2{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Next Stop
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    CPH{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Live Location
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#ECECEC",
                    border: "0.5px solid #B8B8B8",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#193A53",
                    }}
                  >
                    [Insert link here]{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <div
            style={{
              fontSize: 18,
              fontFamily: "Poppins",
              color: "#141414",
              fontWeight: "600",
            }}
          >
            Driver Details{" "}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: 120, height: 120, borderRadius: 100 }}
              src={avatar}
              alt=""
            />
            <div
              style={{
                color: "#141414",
                fontFamily: "Poppins",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Archie Markle
            </div>
            <div
              style={{
                color: "#636363",
                fontFamily: "Poppins",
                fontSize: 15,
                marginTop: -10,
              }}
            >
              Truck Driver
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "#E9EAEC",
                margin: "20px 0",
              }}
            ></div>
            <div
              style={{
                width: "80%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img style={{ width: 30, height: 30 }} src={email} alt="" />
                <div
                  style={{
                    color: "#636363",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  +45-1223-3445
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <img style={{ width: 30, height: 30 }} src={Phone} alt="" />
                <div
                  style={{
                    color: "#636363",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  archie.m7@gmail.com
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop:10
              }}
            >
              <div
                style={{
                  backgroundColor: COLOR.color2,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  width: 100,
                  height: 35,
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Call
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default TruckDetails;
