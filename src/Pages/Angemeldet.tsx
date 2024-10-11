import React, {FC} from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";

const Angemeldet : FC = () => {
    return(
        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles"/>
            <h1 className="mb-3 text-white">Angemeldet</h1>
        </Container>
    )
}

export default Angemeldet;