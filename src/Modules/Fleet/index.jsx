import React, { useContext } from "react";
import "./style/index.css";
import { Card, Col, Empty, Row } from "antd";
import { COLOR } from "../../Constant/Color";
import FleetCard from "../../Components/Global/FleetCard";
import { useNavigate } from "react-router-dom";
import { Truck } from "../../CONTEXT";

const Fleet = () => {
  const navigation = useNavigate();
  const { truck, setTruck } = useContext(Truck);
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
          onClick={() => navigation("/dashboard/fleet/create")}
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
        {truck.length > 0 ? (
          truck.map(({ Brand, Model, Registration }, ind) => {
            return (
              <Col span={6}>
                <FleetCard
                  key={ind}
                  name={Model}
                  reg={Registration}
                  brand={Brand}
                />
              </Col>
            );
          })
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Empty />
          </div>
        )}
      </Row>
    </Card>
  );
};

export default Fleet;
