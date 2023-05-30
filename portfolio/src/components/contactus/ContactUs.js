import React, { useEffect } from 'react'
import "./contactpage.css"

const ContactUs = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");
    
        const focusFunc = (event) => {
          let parent = event.target.parentNode;
          parent.classList.add("focus");
        };
    
        const blurFunc = (event) => {
          let parent = event.target.parentNode;
          if (event.target.value === "") {
            parent.classList.remove("focus");
          }
        };
    
        inputs.forEach((input) => {
          input.addEventListener("focus", focusFunc);
          input.addEventListener("blur", blurFunc);
    
          return () => {
            input.removeEventListener("focus", focusFunc);
            input.removeEventListener("blur", blurFunc);
          };
        });
      }, []);
        const onButtonClick = () => {
          // using Java Script method to get PDF file
          fetch("SamplePDF.pdf").then((response) => {
            response.blob().then((blob) => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement("a");
              alink.href = fileURL;
              alink.download = "MuhammadRafehResume.pdf";
              alink.click();
            });
          });
        };

  return (
    <>
    <div class="ccontainer" id="contact-section">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
        <h3 class="title a1">Let's get in touch</h3>
          <p class="text">
          If you have any inquiries or require further information, please don't hesitate to get in touch with us. We value your feedback and are here to assist you. 
          </p>

          <div class="info">
            <div class="information">
              <img src="/location.png" class="icon" alt="" />
              <p class="asas">Lahore, Pakistan</p>
            </div>
            <div class="information">
              <img src="/email.png" class="icon" alt="" />
              <p class="asas">m.rafeh77@gmial.com</p>
            </div>
            <div class="information">
              <img src="/download.png" class="icon" alt="" />
              <p class="asas">0309-6070730</p>
            </div>
          </div>

          <div class="social-media">
            <div class="social-icons">
              <a
                href="https://linkedin.com/in/muhammad-rafeh-49873a218"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Muhammad-Rafeh" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" onClick={onButtonClick}>
                <i class="fa fa-file"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <div className='btn-div'>
            <div>
            <input className='btn-class' type="submit" value="Send" class="btn" />
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default ContactUs