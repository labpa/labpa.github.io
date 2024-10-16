import React, {FC} from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import CompLogin from "../Components/CompLogin";

const login : FC = () => {
    return(
        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles"/>
            <CompLogin/>
        </Container>
    )
}

export default login