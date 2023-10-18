import React from "react";
import { useNavigate } from "react-router-dom";

const Success =({data}) => {
    const isSignupSuccessful=
        data.name && data.email && data.gender && data.phoneNumber && data.password && data.confirmPassword;
        
    const navigate = useNavigate()
    return(
        <>
            <div>
                <button onClick={() => navigate("/signup-success")}>Sign Up is Successful</button>

                {isSignupSuccessful ?(
                <div>
                    <p>Sign Up is Successful !</p>
                </div>
                ) :(
                    <div>
                        <p>Sign Up is not Successful</p>
                    </div>

                )
                
                };
            </div>
        </>
    );
};
export default Success;



// const Order = ({ data }) => {
//     const isOrderSuccessful =
//         data.productName && data.quantity && data.address;

//     return (
//         <div>
//             <h2>Order Details</h2>
//             {isOrderSuccessful ? (
//                 <div>
//                     <p>Product Name: {data.productName}</p>
//                     <p>Quantity: {data.quantity}</p>
//                     <p>Shipping: {data.address}</p>
//                     <p>Order is successful!</p>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Order is not successful. Please fill in all required fields.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;