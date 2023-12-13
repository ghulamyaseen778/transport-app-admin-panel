import React, { useState } from "react";
import "./style/index.css";
import { Card, Col, Row } from "antd";
import { COLOR } from "../../../Constant/Color";
import FleetCard from "../../Components/Global/FleetCard";
import DriverCard from "../../Components/Global/DriverCard";
import { useNavigate } from "react-router-dom";

const Driver = () => {
  const navigation = useNavigate()
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Millie Burgess",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 2,
      name: "Mike Bell",
      color: "#F50606",
      status: "Eating",
      img: "",
    },
    {
      id: 3,
      name: "Alice Ortega",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 4,
      name: "Samuel Rhodes",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 5,
      name: "Hulda Garcia",
      color: "#F50606",
      status: "Eating",
      img: "",
    },
    {
      id: 6,
      name: "Caleb Ballard",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 7,
      name: "Cecilia Dean",
      color: "#F50606",
      status: "Eating",
      img: "",
    },
    {
      id: 8,
      name: "Katherine Gonzales",
      color: "#F50606",
      status: "Eating",
      img: "",
    },
    {
      id: 9,
      name: "Aaron Garza",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 10,
      name: "Della Strickland",
      color: "#F50606",
      status: "Eating",
      img: "",
    },
    {
      id: 11,
      name: "Kyle Patrick",
      color: "#479400",
      status: "Driving",
      img: "",
    },
    {
      id: 12,
      name: "Josephine Stone",
      color: "#479400",
      status: "Driving",
      img: "",
    },
  ]);
  return (
    <Card>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: 18,
            color: "#141414",
            fontWeight: "600",
          }}
        >
          Driver Status
        </div>
        <div
          style={{
            backgroundColor: COLOR.color2,
            padding: "7px 12px",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={()=>navigation("/dashboard/driver/create")}
        >
          <div
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Create Driver
          </div>
        </div>
      </div>
      <Row gutter={12}>
          {items.map(({ id, status, name, color }) => {
            return (
              <Col span={6}>
                <DriverCard status={status} color={color} name={name} />
              </Col>
            );
          })}
        </Row>
    </Card>
  );
};

export default Driver;
