import React from "react";
import { useNavigate } from "react-router-dom";

const Order =() => {
    const navigate = useNavigate()
    return(
        <>
            <div>Congrats Your Order is Confirmed...!</div>
            <button onClick = {() => navigate(-1)}>Go Back</button>
        </>
    );
};
export default Order;

{/* <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button> */}