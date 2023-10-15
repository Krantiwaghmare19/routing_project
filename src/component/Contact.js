import React from "react";
import styled from "styled-components";


const Contact =() =>{
    const Wrapper = styled.section`
        padding: 9rem 0.5rem 0;

        .container {
            margin-top: 6rem;
            text-align: center;

            .contact-form{
                max-width:50rem;
                margin:auto;

                .contact-inputs{
                    display: flex;
                    flex-derection:column;
                    gap:3rem;

                    input[type=""submit] {
                        curser:pointer;
                        transition:all 0.2s;

                        
                    }
                }
            }
        }
    `;
    return (
    <>
        <Wrapper >
            <h2 className="common-heading">Feel Free to Contact us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.26131732789!2d73.91411937427297!3d18.562253982539392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697108255025!5m2!1sen!2sin" title="Maps Website"
             width="100%" 
             height="450" 
             style={{border:0}} 
             allowFullScreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
            
            </iframe>
        <div className="container">
            <div className="contact-form">
                <form action="https://formspree.io/f/xoqoydev" method="POST" className="contact-inputs">
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        autoComplete="off"
                        required
                    />

                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                    />
                    <textarea name="message" cols="30" rows="6">

                    </textarea>
                    <input type="submit" value="send"/>
                </form>

            </div>
        </div>
        </Wrapper>    
    </>
    );
};

export default Contact;