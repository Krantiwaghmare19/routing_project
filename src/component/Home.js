import React from "react";
import { useNavigate } from "react-router-dom";

const Home =() =>{
    const navigate = useNavigate()
    return (
    <>
        <div>Home Page</div>
        <button onClick={( ) => navigate ("Order" , {replace: true})}> Your Order</button>
    </>
    );
};

export default Home;








// import React from 'react';
// import { styled } from '@mui/system'; // Import the styled function
// import { Link } from 'react-router-dom';

// const ImageContainer = styled('div')({
//   height: '1000px',
//   width: '1100px',
//   marginTop: '10px',
//   border: '1px solid #000',
//   textAlign: 'center',
//   margin: 'auto',
// });

// const Image = styled('img')({
//   maxWidth: '350px',
//   maxHeight: '350px',
//   border: '1px solid #000',
//   marginTop: '25px',
//   marginRight: '20px',
// });

// const Home = ({ data, onclickhandler }) => {
//   return (
//     <div>
//       <h1>Welcome to My Website</h1>
//       <p>This is the home page.</p>
//       <ImageContainer>
//         {Array.isArray(data) ? (
//           data.map((item, index) => (
//             <Link to="/tshirt" key={index}>
//               <Image
//                 src={item.image}
//                 alt="Description of the image"
//                 onClick={() => onclickhandler(item.id)}
//               />
//               {/* Add item details here, e.g., title, price, etc. */}
//             </Link>
//           ))
//         ) : (
//           <p>Data is not available or is not in the expected format.</p>
//         )}
//       </ImageContainer>
//     </div>
//   );
// };

// export default Home;























































































