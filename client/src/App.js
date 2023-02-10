import React from "react";
//import SignIn from "./components/SignIn";
//import NavBar from "./components/NavBar";

import CalibrationForm from "./components/CalibrationForm";
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  
  return (
    <GoogleOAuthProvider clientId= '851970879521-al6kfvd8os51knkbtg9sljvbl35eii1d.apps.googleusercontent.com'>
      <div className="App"> 
        <CalibrationForm/> 
        
      </div>
      </GoogleOAuthProvider>
      
      );
}

export default App;
