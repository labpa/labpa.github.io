import React, {FC} from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image";
import logo from "../Images/labpa.jpg";

const Corriculum : FC = () => {
    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Lebenslauf</h1>


        </Container>
    )
}

export default Corriculum