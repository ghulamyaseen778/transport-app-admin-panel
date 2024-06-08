import { Card } from "antd";
import React, { useEffect, useState } from "react";
import img from "../../assets/avatar.png";
import { RiDashboardFill } from "react-icons/ri";
import { MdAltRoute } from "react-icons/md";
import { GiTruck } from "react-icons/gi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(1);
  const navigation = useNavigate();
  const [sidebarItems, setSidebarItems] = useState([
    {
      id: 1,
      name: "Dashboard",
      Icon: <RiDashboardFill size={25} color={"#636363"} />,
      route: "/dashboard",
    },
    {
      id: 2,
      name: "Route",
      Icon: <MdAltRoute size={25} color={"#636363"} />,
      route: "route",
    },
    {
      id: 3,
      name: "Fleet",
      Icon: <GiTruck size={25} color={"#636363"} />,
      route: "fleet",
    },
    {
      id: 4,
      name: "Driver",
      Icon: <PiSteeringWheelFill size={25} color={"#636363"} />,
      route: "driver",
    },
    {
      id: 5,
      name: "Settings",
      Icon: <CiSettings size={25} color={"#636363"} />,
      route: "setting",
    },
    {
      id: 6,
      name: "Log out",
      Icon: <IoIosLogOut size={25} color={"#636363"} />,
    },
  ]);
  useEffect(() => {
    console.log(window.location.pathname.split("/"));
    if (window.location.pathname == "/dashboard") {
      setActiveSidebarItem(1);
    } else {
      for (let i = 0; i < sidebarItems.length; i++) {
        const element = sidebarItems[i];
        if (window.location.pathname.split("/")[2] == element.route) {
          setActiveSidebarItem(element.id);
        }
      }
    }
  }, [window.location]);
  return (
    <div className="sidebar-card">
      <Card style={{ padding: "20px 0" }}>
        <img
          style={{ width: 150, height: 150, borderRadius: 100 }}
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt=""
        />
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#141414",
            fontSize: 20,
            marginTop: -10,
          }}
        >
          Alex Alexsen
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "#636363",
            fontSize: 14,
            marginTop: -6,
          }}
        >
          Fleet Manager
        </div>
        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#E9EAEC",
            margin: "10px 0",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {sidebarItems.map(({ Icon, name, id, route }) => {
            return (
              <div
                onClick={() => {
                  setActiveSidebarItem(id);
                  route && navigation(route);
                }}
                className="siderbarIcon"
                style={{
                  background: activeSidebarItem == id ? "#193A53" : "",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexDirection: "column",
                  // padding: "5px 0",
                }}
              >
                <div
                  style={{
                    cursor: "Pointer",
                    margin: "5px 0",
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 10,
                  }}
                  className="sidebar-main"
                >
                  <div
                    className={activeSidebarItem == id ? "active" : ""}
                    style={{ marginTop: 5 }}
                  >
                    {Icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: 16,
                      color: activeSidebarItem == id ? "white" : "#636363",
                    }}
                  >
                    {name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
