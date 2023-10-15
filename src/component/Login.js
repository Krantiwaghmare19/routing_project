import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material"; // Import the Button component
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";

const Login = (handleChange) => {
  const paperstyle = { padding: 20, height: "73vh", width: 300, margin: "0 auto" };
  const avatarStyle = { backgroundColor: "green" };
  const btnstyle={margin:"8px 0"}
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter Username" fullWidth required />
        <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        
        <Button type="submit" variant="contained" style={btnstyle} fullWidth color="primary">Sign In</Button>
        <Typography>
            <Link href="#">
                Forget Password
            </Link>
        </Typography>

        <Typography>
            <Link href="#" onClick={()=>handleChange("event",1)}>
            Do you have an account ?
                Sigh Up
            </Link>
        </Typography>
        
      </Paper>

    </Grid>
  );
};

export default Login;
