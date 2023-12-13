import { Card, Layout } from "antd";
import React from "react";
import HeaderComp from "../src/Components/Global";
import Sidebar from "../src/Components/Global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/Modules/Dashboard";
import RoutesComp from "../src/Modules/Routes";
import Fleet from "../src/Modules/Fleet";
import Driver from "../src/Modules/Driver";
import Setting from "../src/Modules/Setting";
import CreateTruck from "../src/Modules/Fleet/Screens/CreateTruck";
import DriverCreate from "../src/Modules/Driver/Screens";
import TruckDetails from "../src/Modules/TruckDetails";
import DriverDetails from "../src/Modules/DriverDetails";
const { Header, Footer, Sider, Content } = Layout;
const LayOut = () => {
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
              <Route path="/fleet/create" element={<CreateTruck />} />
              <Route path="/fleet/:id" element={<TruckDetails />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/driver/create" element={<DriverCreate />} />
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
