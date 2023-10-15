import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from '../component/Login';
import Signup from '../component/Signup';
import Paper from '@mui/material/Paper';       

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle={width:340, margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
    <Paper elevation={20} style={paperStyle}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Login in" />
        <Tab label="Sign up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup/>
      </TabPanel>
    </Paper>
    </div>
  );
};

export default SignInOutContainer;
