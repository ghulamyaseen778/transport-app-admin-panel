import React from "react";
import img from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const DriverCard = ({ name, status,color }) => {
  const navigation = useNavigate()
  return (
    <div
    onClick={()=>navigation(`/dashboard/driver/${name.split(" ").join("-")}`)}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#EBEBEB",
        padding: "6px 2px",
        borderRadius: 6,
        marginTop:10,
        cursor:"pointer"
      }}
    >
      <img style={{ width: 60, height: 60 }} src={img} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: 5,
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: "600",
            color: "#193A53",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: 10,
            fontWeight: "600",
            color: "#636363",
          }}
        >
          Current Activity:{" "}
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: 10,
              fontWeight: "600",
              color: color,
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
