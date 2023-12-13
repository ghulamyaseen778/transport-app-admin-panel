import React from "react";
import "./style/index.css";
import { Card, Col, Row } from "antd";
import { COLOR } from "../../../Constant/Color";
import FleetCard from "../../Components/Global/FleetCard";
import { useNavigate } from "react-router-dom";

const Fleet = () => {
  const navigation = useNavigate()
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
          Fleet Status
        </div>
        <div
          style={{
            backgroundColor: COLOR.color2,
            padding: "7px 12px",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={()=>navigation("/dashboard/fleet/create")}
        >
          <div
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: 14,
            }}
            
          >
            Create Truck
          </div>
        </div>
      </div>
      <Row gutter={12}>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
        <Col span={6}>
          <FleetCard/>
        </Col>
      </Row>
    </Card>
  );
};

export default Fleet;
