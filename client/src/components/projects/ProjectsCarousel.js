import React from 'react'
import { Carousel } from 'react-bootstrap'

function ProjectsCarousel() {
    return (
        <Carousel interval={null} className="project-carousel m-auto" >
            <Carousel.Item>
                <div className="video-section">
                    <video autoplay="" defaultMuted="" loop="" muted loop  className="img-fluid video-section"  >
                        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                    </video>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <video autoplay="" defaultMuted="" loop="" muted loop  className="video-section img-fluid">
                <source
                    src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
                    type="video/mp4"
                />
            </video>
            </Carousel.Item>
            <Carousel.Item>
            <video autoplay="" defaultMuted="" loop="" muted loop  className="vide0-section img-fluid" >
                <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
            </video>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProjectsCarousel
