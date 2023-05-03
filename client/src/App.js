import React from "react";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MeasureForm from "./components/MeasureForm";
import Data from "./components/Data";
import ExecuteButton from "./components/ExecuteButton";
import SpcPlot from "./components/SpcPlot";
import CalibrationForm from "./components/CalibrationForm";
//import MeasureButton from "./components/MeausreButton";

function App() {
  return (
    <GoogleOAuthProvider clientId="851970879521-al6kfvd8os51knkbtg9sljvbl35eii1d.apps.googleusercontent.com">
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/Trigger" element={<ExecuteButton />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/Chart" element={<SpcPlot />} />
            <Route path="/Datas" element={<Data />} />
          </Routes> 

          
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
