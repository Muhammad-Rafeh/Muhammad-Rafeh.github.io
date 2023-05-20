import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'
import "./projectsCarousel.css";
import Card from './Card';
import { Parallax } from 'react-parallax'
import SpaceRoom from '../../images/carouselBgCrystals.jpg'

export default function SpringCarousel() {
  
  const [isPaused, setIsPaused] = useState(false);
  const cardsData = [
    {
      id: 1,
      title: "Ecommerce",
      projectImage: "/ecommerce.png",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(0deg , #3f5efb, #fc466b)",
      icon: 'BsShopWindow'
    },
    {
      id: 2,
      title: "Chat App",
      projectImage: "/chatApp.png",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(0deg , #5E9F53, #3AFF00)",
      icon: 'BsShopWindow'
    },
    {
      id: 3,
      title: "Weather App",
      projectImage: "/weatherApp.png",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #FFC500, #A23700)",
      icon: 'BsShopWindow'
    },
    {
      id: 4,
      title: "Sparetoolz Web UI",
      projectImage: "/sparetoolz.png",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #D9F5FF, #009DFF)",
      icon: 'BsShopWindow'
    },
    {
      id: 5,
      title: "Augersoft Web Solutions",
      projectImage: "/augersoft.jpeg",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #F7F1FF, #BA00FF)",
      icon: 'BsShopWindow'
    },
    {
      id: 6,
      title: "Tapp Event Solutions",
      projectImage: "/tapp.jpeg",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #007F0A, #00FFBA)",
      icon: 'BsShopWindow'
    },
    {
      id: 7,
      title: "Client Utility Portal",
      projectImage: "/privateClientPortal.png",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #10007F, #9200C7)",
      icon: 'BsShopWindow'
    },
    {
      id: 8,
      title: "SpiChaser(Security Startup)",
      projectImage: "/spy.jpg",
      iconImage: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg",
      cardColor: "linear-gradient(-20deg , #215E72, #000000)",
      icon: 'BsShopWindow'
    }
  ]

  const { 
    carouselFragment, 
    slideToPrevItem, 
    slideToNextItem 
  } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    startEndGutter: 100,
    items: cardsData.map((cardData) => ({
      id: cardsData?.id,
      renderItem: (
        <Card cardData={cardData} setIsPaused={setIsPaused} isHover={isPaused} />
      ),
    })),
  });

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        slideToNextItem();
      }, 2000);
    } else {
      clearInterval(intervalId);
    }
    
    return () => {
      clearInterval(intervalId);
    };
  },[isPaused]);

  return (
 <div className='spring-carousel-container'>
      <div className="mt-1 projects-carousel-heading-wrapper">
        <h1 className="ps-5 projects-carousel-heading d-flex justify-center align-center items-center text-start">
          PROJECTS
        </h1>
      </div>
      <Parallax blur={0} bgImage={SpaceRoom} bgImageAlt="space room" strength={300}>

      <div className='spring-carousel-cards-container'>
      {carouselFragment}
      </div>
      
      </Parallax>

    </div>
   
  );
}