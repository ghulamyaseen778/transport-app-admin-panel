import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Modules/Registration";
import SignUp from "./Modules/Registration/Signup";
import LayOut from "../LAYOUT";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashboard/*" element={<LayOut/>} >

      </Route>
    </Routes>
  );
};

export default App;
