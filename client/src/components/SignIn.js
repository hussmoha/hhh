import React from "react"; 
import { GoogleLogin } from "@react-oauth/google"; 
import signInGoogle from "../controller/auth";
import { useNavigate } from 'react-router-dom';


function SignIn() { 
  const navigate = useNavigate();

return (
    <div className="App">
        <header className="App-header">
            
            <GoogleLogin 
                onSuccess={credentialResponse => {
                  signInGoogle(credentialResponse, navigate)
            
            }}
                onError={() => {
                console.log('Login Failed');
            }}/>
        </header>
    </div>
);
}

export default SignIn