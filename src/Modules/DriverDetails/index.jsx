import { Card, Col, Progress, Row, Table, } from "antd";
import React from "react";
import { COLOR } from "../../Constant/Color";
import avatar from "../../assets/avatar.png";
import email from "../../assets/emailIcon.png";
import Phone from "../../assets/phoneIcon.png";
import "./style/index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DriverDetails = () => {
  
  const data = [
    {
      Activity: "Driving",
      Category: "Drive",
      StartTime: "20:45 AM",
      FinishTime: "---",
      Country: "Denmark",
      Type: "Truck",
      Status: "On-going",
    },
  ];
  const columns = [
    {
      title: "Activity",
      dataIndex: "Activity",
      key: "Activity",
      render: (text) => (
        <div style={{ color: "rgba(71, 148, 0, 0.87)" }}>{text}</div>
      ),
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
    {
      title: "Start Time",
      dataIndex: "StartTime",
      key: "StartTime",
    },
    {
      title: "Finish Time",
      dataIndex: "FinishTime",
      key: "FinishTime",
    },
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
  ];
  const datas = {
    labels: ['Driver', 'Break time', 'Service'],
    datasets: [
      {
        label: 'driver',
        data: [12, 14,6],
        backgroundColor: [
          '#068221',
          "#FFD703",
          "#F07F21"
        ],
        borderColor: [
          '#068221',
          "#FFD703",
          "#F07F21"
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Row gutter={12} style={{ height: "100%", marginBottom: 20 }}>
        <Col span={16} style={{ height: "100%" }}>
          <Row gutter={12}>
            <Col span={9}>
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
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    Archie Markle
                  </div>
                  <div
                    style={{
                      color: "#636363",
                      fontFamily: "Poppins",
                      fontSize: 12,
                      // marginTop: -10,
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
                      width: "100%",
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
                      <img
                        style={{ width: 30, height: 30 }}
                        src={email}
                        alt=""
                      />
                      <div
                        style={{
                          color: "#636363",
                          fontFamily: "Poppins",
                          fontSize: 14,
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
                        marginTop: 8,
                      }}
                    >
                      <img
                        style={{ width: 30, height: 30 }}
                        src={Phone}
                        alt=""
                      />
                      <div
                        style={{
                          color: "#636363",
                          fontFamily: "Poppins",
                          fontSize: 14,
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
                      marginTop: 10,
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
            <Col span={15}>
              <Card>
                <div
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins",
                    color: "#141414",
                    fontWeight: "600",
                  }}
                >
                  Driver Summary{" "}
                </div>
                <Row gutter={12}>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                          }}
                        >
                          2{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                          }}
                        >
                          399 km{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                          }}
                        >
                          20/12/2023{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                          }}
                        >
                          2{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                          }}
                        >
                          CPH{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
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
                            fontSize: 14,
                            color: "#193A53",
                            overflow:"hidden",
                           
                          }}
                        >
                          https://www.google.com/maps/@24.9102281,67.1013203,12.94z?entry=ttu
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          color: "#636363",
                          fontSize: 12,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                        }}
                      >
                        Remaining Work Hours
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
                            fontSize: 14,
                            color: COLOR.color2,
                          }}
                        >
                          0 Hour{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col style={{ marginTop: 10 }} span={24}>
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
                <Table pagination={false} columns={columns} dataSource={data} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ height: "100%" }}>
          <Card
            className="dnv-o"
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: "200px",
                  width: "200px",
                }}
              >
                <div>
                  <Tooltip
                    title="Driven hours
13,5 h"
                  >
                    <Progress
                      size={200}
                      strokeColor="#068221"
                      percent={80}
                      type="circle"
                    />
                  </Tooltip>
                </div>
                <div style={{ position: "absolute", top: 25, left: 25 }}>
                  <Tooltip
                    title="break time
7 h"
                  >
                    <Progress
                      size={150}
                      strokeColor="#FFD703"
                      percent={60}
                      type="circle"
                    />
                  </Tooltip>
                </div>
                <div style={{ position: "absolute", top: 50, left: 50 }}>
                  <Tooltip
                    title="service
3,5 h"
                  >
                    <Progress
                      size={100}
                      strokeColor="#F07F21"
                      percent={20}
                      type="circle"
                    />
                  </Tooltip>
                </div>
              </div> */}
              <Pie data={datas} />
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: 40,
                  borderRadius: 5,
                  backgroundColor: COLOR.color2,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 14,
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Export
                </div>
              </div>
              <div style={{ marginTop: 10, width: 150 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 12,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Total Hours (Germany)
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
                      fontWeight: "700",
                      fontSize: 18,
                      color: "#193A53",
                    }}
                  >
                    13,5 Hour{" "}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 10, width: 150 }}>
                <div
                  style={{
                    color: "#636363",
                    fontSize: 12,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Total Hours (Denmark)
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
                      fontWeight: "700",
                      fontSize: 18,
                      color: "#193A53",
                    }}
                  >
                    6 Hour{" "}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card style={{ marginTop: 10, marginBottom: 20 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57907.47476647286!2d67.06626560000001!3d24.8905728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2s!4v1702367963079!5m2!1sen!2s"
              style={{
                border: 0,
                height: 300,
                width: "100%",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DriverDetails;
