import React from "react";
import mypngimg from "../images/mypngimg1.png";
import "./landingPanel.css";

function LandingPanel() {
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
    <div className="lp-global-container">
      <div className="lp-container">
        <div className="lp-datawrapper">
          <div className="lp-name">M.Rafeh</div>
          <div className="lp-data">Hey, I'm a ...</div>
          <div className="lp-data">Full Stack Webdeveloper.</div>
          <div class="lp-social-media">
            <div class="lp-social-icons">
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
        <div className="lp-mypngimg-wrapper">
          <img src={mypngimg} className="lp-mypngimg" />
        </div>
      </div>
    </div>
  );
}

export default LandingPanel;
