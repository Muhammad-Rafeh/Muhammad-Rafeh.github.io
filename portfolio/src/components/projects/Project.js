import React from "react";
import "./project.css";
import { Parallax } from 'react-parallax'
import Lion from '../../images/pinkFlowers.jpg'
import SpringCarousel from "../springCarousel/SpringCarousel";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-scroll-section">
        <div className="project-scroll-text">
          <div className="project-scroll-line"></div>SCROLL
        </div>
        <div className="project-scroll-number">01</div>
      </div>
      <div className="padding-test">
      <div className="project-heading-wrapper"></div>
      {/* <Parallax blur={0} bgImage={Lion} bgImageAlt="the cat" strength={300}> */}
       <div className="project-heading">PR<span>OJ</span>EC<span>TS</span></div>
        
        {/* </Parallax> */}
        </div>
    </div>
  );
};

const ProjectItems = () => {
  return (
    <div>
        
        {/* <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=faa4e192f33e0d6b7ce0e54f15140e42)",
                }}
              />
              <h1 id="demo1">This is a title</h1>
              <p id="demo2">
                Some sample text about the article this hexagon leads to
              </p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1425668273332-3a46ab26b161?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d453ab3dec298c43415526458b360fa6)",
                }}
              />
              <h1 id="demo1">This is a title</h1>
              <p id="demo2">
                Some sample text about the article this hexagon leads to
              </p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/44/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=49dab7a5e4b2e28b5707bc2db974c94b)",
                }}
              />
              <h1 id="demo1">This is a title</h1>
              <p id="demo2">
                Some sample text about the article this hexagon leads to
              </p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1432887382605-0abf9cc49e8f?crop=entropy&fit=crop&fm=jpg&h=1375&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1725)",
                }}
              />
              <h1 id="demo1">This is a title</h1>
              <p id="demo2">
                Some sample text about the article this hexagon leads to
              </p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1417026846249-f31f7e43fc35?crop=entropy&fit=crop&fm=jpg&h=1375&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1725)",
                }}
              />
              <h1 id="demo1">This is a title</h1>
              <p id="demo2">
                Some sample text about the article this hexagon leads to
              </p>
            </a>
          </div>
        </li> */}
  
    </div>
  );
};

export default Project;
