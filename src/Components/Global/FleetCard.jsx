import React from "react";
import img from "../../assets/fleetTruck.png";
import { useNavigate } from "react-router-dom";

const FleetCard = ({name,reg,brand}) => {
  const navigation = useNavigate()
  return (
    <div
      className="fleetCard"
      style={{
        backgroundColor: "rgba(25, 58, 83, 0.10)",
        padding: "5px 10px",
        borderRadius: 5,
        marginTop: 10,
      }}
      onClick={()=>navigation("/dashboard/fleet/id")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 14,
            color: "#193A53",
          }}
        >
         {name?name:"USDOT 091805"}
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 12,
            color: "#F07F21",
          }}
        >
          {reg?reg:"DESK Traders"}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "50%" }}>
          <div
            style={{
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#636363",
            }}
          >
            Type: {brand}
          </div>
          <div
            style={{
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#636363",
            }}
          >
            Status: On-Time
          </div>
          <div
            style={{
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#636363",
            }}
          >
            location: Odense
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
