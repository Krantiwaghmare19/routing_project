import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {

    const navigate= useNavigate();

    const  goToContact = () =>{
        navigate("./contact");
    }
    return (
        <>
            
            <section>
                <h1>About Page</h1>
                <button onClick={() => goToContact}>Go to Contact Page</button>
                <button 
                    onClick={()=>navigate(-1)
                }>
                    Go Back
                </button>
            </section>
        </>
    );
};

export default About;
