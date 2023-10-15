import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    root: {
      margin: '16px', 
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      margin: '8px', 
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '16px', 
    },
  }));

const Home =({data}) =>{
    const navigate = useNavigate()
    const classes = useStyles();
    return (
    <>
        <div>Home Page</div>
        <div className={classes.root}>
        <Typography variant="h5">Product List</Typography>
        <List>
            {data.map((item) => (
            <ListItem className={classes.listItem} key={item.id}>
                <img src={item.image} alt="Product" className={classes.image} />
                <ListItemText>
                <Typography variant="h6">Name: {item.title}</Typography>
                <Typography variant="body1">Price: ${item.price}</Typography>
                </ListItemText>
            </ListItem>
            ))}
        </List>
    </div>
    
    <button onClick={() => navigate ("Order" , {replace: true})}> Your Order</button>
    </>
    );
};

export default Home;























































































