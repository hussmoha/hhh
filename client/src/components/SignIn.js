import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { GoogleLogin } from '@react-oauth/google'; 
import signInGoogle from '../controller/auth';
import { useNavigate } from 'react-router-dom';






export default function SignIn() { 
  const navigate = useNavigate();
  
  return (
    
      
        <Box
          sx={{
            marginTop: 28,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyItems: 'center'
           
          }}
        > 
        <h1>WELCOME</h1>

        <GoogleLogin
          onSuccess={credentialResponse => {
            signInGoogle(credentialResponse, navigate);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
        </Box>
      
    
  );
}