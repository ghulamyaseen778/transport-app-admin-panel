import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Modules/Registration";
import SignUp from "./Modules/Registration/Signup";
import LayOut from "./LAYOUT";
import { Spin } from "antd";
import { Driver, Truck } from "./CONTEXT";

const App = () => {
  const [driver, setDriver] = useState([]);
  const [truck, setTruck] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Driver.Provider value={{ setDriver, driver }}>
      <Truck.Provider value={{ truck, setTruck }}>
        <Routes>
          <Route index element={<Login load={setLoading} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<LayOut load={setLoading} />}></Route>
        </Routes>
        {loading && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              alignItems: "center",
              top: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Spin size="large" />
          </div>
        )}
      </Truck.Provider>
      </Driver.Provider>
    </div>
  );
};

export default App;
