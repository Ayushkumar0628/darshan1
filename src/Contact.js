import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    text-align: center;

   

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {

            padding:2vh;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color:white;
              border: 1px solid orange;
              color: orange;
              transform: scale(0.9);
            }
          }
        }
      }
    }
    
  `;
  

  return <Wrapper>
  <h2 className="common-heading">Contact Page DARSHAN</h2>
  

  <iframe  title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0676709453937!2d88.36000151495831!3d22.501644085219397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d88985d641%3A0x9c7bf083b6032ddc!2sINOX!5e0!3m2!1sen!2sin!4v1690116514089!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/xnqkqwan" method='POST' className="contact-inputs">
      <TextField id="outlined-basic" label="Username" variant="outlined" required autoComplete="off"/>
      <TextField id="outlined-basic" label="Email" variant="outlined" required autoComplete="off" />
        <textarea placeholder="enter your message"  cols="30" rows="10" autoComplete="off" required  name="Message"></textarea>
        <Button variant="contained" type="submit" value="send" endIcon={<SendIcon />}>Send</Button>
      </form>
    </div>
  </div>

  </Wrapper>;
};



export default Contact;
