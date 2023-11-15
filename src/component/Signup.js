import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel"; 
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Paper, Typography, Avatar, TextField, Checkbox ,Button} from "@mui/material";  // Added import for Checkbox
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const Signup = ({onclick}) => {
  const navigate=useNavigate();
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
  const avatarStyle = { background: "green" };
  const initialValues = {
    email: "",   
    name: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const onSubmit = (values, props) => {
    onclick(values)
    navigate("/success")
  };

  return (
    <>
    <Grid container justifyContent="center">
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field as={TextField} fullWidth name="name" label="Name" />
              <Field as={TextField} fullWidth name="email" label="Email" />
              <FormControl component="fieldset" style={marginTop}>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number" />
              <Field as={TextField} fullWidth name="password" label="Password" />
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
              />
              <FormControlLabel 
                control={<Field as={Checkbox} type="checkbox" name="termsAndConditions" />}
                label="I accept the terms and conditions"
              />
              <Button type="submit" variant="contained" color="primary" >
                Sign Up
              </Button> 
              
          
            </Form>

          )}
        </Formik>
      </Paper>
    </Grid>
   
   
    </>
    
    
  );
};

export default Signup;
