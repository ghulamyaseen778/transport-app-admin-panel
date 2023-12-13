import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import DriverCard from "../../Components/Global/DriverCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
  const navigation = useNavigate()
  return (
    <div>
      <Card style={{}}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#141414",
            }}
          >
            Fleet Status{" "}
          </div>
          <div
            style={{
              backgroundColor: "#FFDCC8",
              borderRadius: 50,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: 100,
              cursor: "pointer",
            }}
            onClick={()=>navigation("driver")}
          >
            <div
              style={{ color: "#8C8C8C", fontFamily: "Poppins", fontSize: 14 }}
            >
              View all
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
      <Card style={{ marginTop: 10,marginBottom:20 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57907.47476647286!2d67.06626560000001!3d24.8905728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2s!4v1702367963079!5m2!1sen!2s"
          style={{
            border:0,
            height:300,
            width:"100%"
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </div>
  );
};

export default Dashboard;
