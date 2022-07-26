import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Register() {
  return (
    <>
      <RegisterContent />
    </>
  );
}

function RegisterContent() {
  const navigate = useNavigate()
  return (
      <section className="register-page">
        <header className="register-header">
          <h3>Register</h3>
          <h4>Please fill your information bellow</h4>
        </header>
        <main>
          <div className="register-form">
            <div className="form-item box-item">
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Full Name" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Email" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Adress" variant="standard" />
      <br/>
      <FormControl>
      <br/>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Box>
            </div>
          </div>
        </main>
        <footer className="regiester-footer">
            Already have an account? | <span onClick={() => navigate("/login")}>Login</span>
        </footer>
        <i className="wave"></i>
      </section>
  );
}
