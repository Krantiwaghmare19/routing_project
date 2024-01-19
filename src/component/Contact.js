import React from "react";
import styled from "styled-components";
import { Typography, Container, TextField, Button } from "@mui/material";

// Styled component for the wrapper section
const Wrapper = styled.section`
  padding: 9rem 0.5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    // Styled component for the contact form container
    .contact-form-container {
      max-width: 50rem;
      margin: auto;
      border: 2px solid #ccc;
      border-radius: 8px;
      padding: 2rem;

      // Styled component for the contact form
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        // Styled component for the submit button
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Typography variant="h2" className="common-heading">
          Feel Free to Contact us
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.26131732789!2d73.91411937427297!3d18.562253982539392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697108255025!5m2!1sen!2sin"
          title="Maps Website"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Container className="container">
          {/* Contact form container */}
          <div className="contact-form-container">
            <Typography variant="h4">Contact here...👇</Typography>
            {/* Contact form */}
            <form className="contact-form">
              <TextField
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                autoComplete="off"
                required
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <TextField
                type="text"
                name="phone number"
                label="Phone Number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <TextField
                name="message"
                label="Message"
                placeholder="Message"
                multiline
                rows={6}
                variant="outlined"
                required
              />
              <Button variant="contained" type="submit">
                Send
              </Button>
            </form>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;
