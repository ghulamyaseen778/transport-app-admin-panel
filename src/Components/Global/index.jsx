import React from "react";
import logo from "../../assets/Logo.png";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import "./style/index.css";
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => navigation("/dashboard")}
          style={{ width: 150, height: 70, cursor: "pointer" }}
          src={logo}
          alt=""
        />
        <div style={{ width: "400px" }} className="header-input">
          <Input
            placeholder="Search fleet (e.g vehicle number, vehicle ID, name)"
            suffix={<CiSearch size={20} />}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#5DC002",
            borderRadius: 100,
            padding: "0 20px",
            height: 40,
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          <FiRefreshCcw size={20} color="white" />
          <div style={{ color: "white", fontFamily: "Poppins", fontSize: 14 }}>
            Refresh
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
