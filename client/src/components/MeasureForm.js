import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const MeasureForm = () => {
  const classes = useStyles();
  const [partName, setPartName] = useState('');
  const [partId, setPartId] = useState('');
  const [creator, setCreator] = useState('');
  const [approved, setApproved] = useState('');
  const [Date, setDate] = useState('');
 

  const handleSubmit = e => {
    e.preventDefault();
    const measurement = {
      partName,
      partId,
      creator,
      approved,
      Date
      
    };
    axios.post('http://localhost:3001/measurepost', measurement)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};
 

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <TextField 
       variant="outlined"
        label="Part Name"
        className={classes.textField}
        value={partName}
        onChange={e => setPartName(e.target.value)}
        margin="normal"
      />
      <TextField 
       variant="outlined"
        label="Part ID"
        className={classes.textField}
        value={partId}
        onChange={e => setPartId(e.target.value)}
        margin="normal"
      />
      <TextField  variant="outlined"

        label="Creator"
        className={classes.textField}
        value={creator}
        onChange={e => setCreator(e.target.value)}
        margin="normal"
      />
      <TextField
       variant="outlined"
        label="Approved"
        className={classes.textField}
        value={approved}
        onChange={e => setApproved(e.target.value)}
        margin="normal"
      />
    
      
      <TextField 
       variant="outlined"
        label="Date"
        type="date"
        className={classes.textField}
        value={Date}
        onChange={e => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      /> 
      <Button variant="contained" type='submit' fullWidth size='large'>Submit</Button>
    
  </form> 
  );
      };
      export default MeasureForm;

    