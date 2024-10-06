import React, {FC} from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image";
import logo from "../Images/labpa.jpg";

const Contact : FC = () => {
    return(

        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles"/>
            <h1 className="mb-3 text-white">Kontakt</h1>
            <h2 className="mb-4 text-white">Der einfachste Weg mich zu erreichen ist per Email.</h2>
            <h2 className="mb-4 text-white">pbienenstein@posteo.de</h2>

        </Container>
    )
}
export default Contact