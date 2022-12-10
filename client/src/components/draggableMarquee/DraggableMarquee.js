import React from "react";
import Marquee from "./Marquee";
import ProjectsCarouselCards from "../projectsCarousel/ProjectsCarouselCards";

const projects = [
  {
    imgId: 1,
    projectTitle: "Chat App",
    description: "this is description of chat web application",
    themeColor: "#D5CABD",
    imgAddr: "chatApp.png",
    imgWidth: "498px",
  },
  {
    imgId: 2,
    projectTitle: "Ecommerce Website",
    description: "this is description of Ecommerce website",
    themeColor: "#FF8066",
    imgAddr: "ecommerceWebsite.png",
    imgWidth: "660px",
  },
  {
    imgId: 3,
    projectTitle: "Weather web app",
    description: "this is description of weather web application",
    themeColor: "#FEFEDF",
    imgAddr: "weatherApp.png",
    imgWidth: "528px",
  },
  {
    imgId: 4,
    projectTitle: "Online web solution",
    description: "this is description of online web solution",
    themeColor: "#00C9A7",
    imgAddr: "sparetoolz.png",
    imgWidth: "485px",
  },
];

const DraggableMarquee = () => {
  return (
    <>
      <Marquee>
        <div className="d-flex">
          <ProjectsCarouselCards data={projects[0]} />
          <ProjectsCarouselCards data={projects[1]} />
        </div>
      </Marquee>
      <Marquee>
        <div className="d-flex">
          <ProjectsCarouselCards data={projects[2]} />
          <ProjectsCarouselCards data={projects[3]} />
        </div>
      </Marquee>
    </>
  );
};

export default DraggableMarquee;
