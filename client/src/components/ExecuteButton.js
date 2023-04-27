import React, { useState } from 'react';
import axios from 'axios'; 
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';



function ExecuteButton() {
 

  const handleClick = () => {
    
    axios.post('http://localhost:3001/execute')
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  return (
    <Button variant="contained" onClick={handleClick} >
       Take measurement
      <PhotoCamera sx={{ml: '10px'}}/>
    </Button>
  );
}


export default ExecuteButton;
