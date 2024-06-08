import { Card, Layout } from "antd";
import React from "react";
import HeaderComp from "../Components/Global";
import Sidebar from "../Components/Global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Modules/Dashboard";
import RoutesComp from "../Modules/Routes";
import Fleet from "../Modules/Fleet";
import Driver from "../Modules/Driver";
import Setting from "../Modules/Setting";
import CreateTruck from "../Modules/Fleet/Screens/CreateTruck";
import DriverCreate from "../Modules/Driver/Screens";
import TruckDetails from "../Modules/TruckDetails";
import DriverDetails from "../Modules/DriverDetails";
const { Header, Footer, Sider, Content } = Layout;
const LayOut = ({load}) => {
  const headerStyle = {
    color: "#fff",
    height: 80,
    position: "fixed",
    background: "linear-gradient(180deg, #193A53 41.7%, #356A81 105.15%)",
    width:"100%",
    zIndex:10
  };
  const headerStyle2 = {
    height: 80,
    backgroundColor: "transparent",
  };
  const contentStyle = {
    // textAlign: "center",
    minHeight: "90vh",
    height: "100%",
    // backgroundColor: '#0958d9',
    marginRight: 20,
    marginTop: 10,
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "transparent",
    padding: "10px 20px",
    // position: "fixed"
  };
  const siderStyle2 = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "transparent",
    padding: "10px 20px",
    position: "fixed"
  };
  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  };
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderComp />
        </Header>
        <Header style={headerStyle2}>
          {/* <HeaderComp /> */}
        </Header>
        
        <Layout>
          <Sider width="25%" style={siderStyle}>
            {/* <Sidebar /> */}
          </Sider>
          <Sider width="25%" style={siderStyle2}>
            <Sidebar />
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/route" element={<RoutesComp />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/fleet/create" element={<CreateTruck load={load} />} />
              <Route path="/fleet/:id" element={<TruckDetails />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/driver/create" element={<DriverCreate load={load} />} />
              <Route path="/driver/:id" element={<DriverDetails />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayOut;
