import React, { FC } from "react";
import { Carousel, Container } from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image"; // Ensure you import the Image component correctly
import logo from "../Images/labpa.jpg"; // If you plan to use this logo
import ExampleCarouselImage from '../Images/labpa.jpg'; // Ensure this image path is correct

const Corriculum: FC = () => {
    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Lebenslauf</h1>


        </Container>
    );
}

export default Corriculum;
