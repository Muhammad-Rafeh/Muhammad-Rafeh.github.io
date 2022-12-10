import React, {
  useState,
  useReducer,
  useRef,
  useMemo,
  useEffect,
  createRef,
} from "react";
import "./projectsCarousel.css";
import ProjectsCarouselCards from "./ProjectsCarouselCards";
import ProjectsCarouselCardsMarquee from "./ProjectsCarouselCardsMarqee";
import DraggableMarquee from "../draggableMarquee/DraggableMarquee";
import bgVideoChina from "../../images/bgVideoChina.mp4";
import sloth from "../../images/sloth-transformed.png";

const projects = [
  {
    imgId: 1,
    projectTitle: "Chat App",
    description: "this is description of chat web application",
    themeColor: "#4B4453",
    imgAddr: "chatApp.png",
    imgWidth: "498px",
  },
  {
    imgId: 2,
    projectTitle: "Ecommerce Website",
    description: "this is description of Ecommerce website",
    themeColor: "#FFC75F",
    imgAddr: "ecommerceWebsite.png",
    imgWidth: "660px",
  },
  {
    imgId: 3,
    projectTitle: "Weather web app",
    description: "this is description of weather web \n application",
    themeColor: "#E0E6E8",
    imgAddr: "weatherApp.png",
    imgWidth: "528px",
  },
  {
    imgId: 4,
    projectTitle: "Online web solution",
    description: "this is description of online web solution",
    themeColor: "#D5ECF5",
    imgAddr: "sparetoolz.png",
    imgWidth: "485px",
  },
];

export default function ProjectsCarousel() {
  const refs = useRef([createRef(), createRef()]);

  return (
    <div className="projects-carousel-wrapper pb-1">
      <div className="projects-carousel-background">
        <div className="mt-1 projects-carousel-heading-wrapper">
          <h1 className="ps-5 projects-carousel-heading d-flex justify-center align-center items-center text-start">
            PROJECTS
          </h1>
        </div>
        <div className="projects-carousel-side-label-wrapper">
          <div className="projects-carousel-side-label-text">
            P<br />R<br />O<br />J<br />E<br />C<br />T<br />S
          </div>
        </div>
        <div className="py-3"></div>
        <DraggableMarquee />
        <div className="py-5 pb-5"></div>
      </div>
    </div>
  );
}
