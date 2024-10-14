import React, {FC} from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";

const Buchhaltung : FC = () => {
    return(
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <div className={"container-sm"}>
                <h1>Buchhaltung</h1>

            </div>
            {/*<ParticlesComponent id="particles"/>*/}
            <h1 className="mb-3 text-white">Buchhaltung</h1>
        </Container>
    )
}

export default Buchhaltung;