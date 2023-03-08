import React from "react";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import { Route, Routes} from "react-router-dom";

import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MeasureForm from "./components/MeasureForm";
import MeasurementsTable from "./components/MeasurementsTable";



function App() {

  return (
    <GoogleOAuthProvider clientId='851970879521-al6kfvd8os51knkbtg9sljvbl35eii1d.apps.googleusercontent.com'>
      <div className="App">
        <NavBar />
        <div className="container">
        <Routes> 
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/" element={<MeasureForm/>}/> 
          <Route path="/MeasurementDatas" element={<MeasurementsTable />}/>
        </Routes>
        </div>
      </div>
    </GoogleOAuthProvider>

  );
}

export default App;
