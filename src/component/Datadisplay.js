import React from "react";

import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, Typography } from '@mui/material';



const useStyles = makeStyles((theme) => ({
  
  listItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: theme.spacing(2),
  },
}));
const Datadisplay=({data})=>{
    const classes = useStyles();
    return(
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
    );
}
export default Datadisplay;