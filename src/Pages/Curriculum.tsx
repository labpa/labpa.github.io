import React, { FC } from "react";
import {Col, Container, Row} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import foto from "../Images/foto.jpg";
import Image from "react-bootstrap/Image";


const Corriculum: FC = () => {
    return (
        <Container className="container-sm p-3">
            <ParticlesComponent id="particles"/>

            <div className="d-flex align-items-center flex-column flex-md-row">
                <div>
                    <Image src={foto} rounded style={{width: '250px', height: '300px'}}/>
                </div>
                <div className="ms-3">
                    <h1 className="mb-3 text-white text-center" style={{fontSize: "65px"}}>Pascal Bienenstein</h1>
                </div>
            </div>
            <hr style={{borderColor: "#39868E"}} className="border-end border-2 opacity-75"/>


            <div className="container-sm content">
                <Row>
                    <Col>
                        <h2 className={"text-justify"}>Berufserfahrung</h2>
                    </Col>
                    <Col>
                        <h3>Tedfedgferdgferst</h3>
                        <h3>Teegergregfregst</h3>
                    </Col>
                </Row>
                <hr style={{borderColor: "#39868E"}} className="border-end border-2 opacity-75"/>
                <Row>
                    <Col>
                        <h2>Ausbildung</h2>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <h3>09/2022 bis 07/2024: Ausbildung zum Fachinformatiker für Anwendungsentwicklung</h3>
                            </li>
                            <li>
                                <h3>Seilzugangstechniker Fisat Level 1</h3>
                            </li>
                            <li>
                                <h3>Garten- und Landschaftsbauer</h3>
                            </li>
                        </ul>
                    </Col>
                </Row>


                <hr style={{borderColor: "#39868E"}} className="border-end border-2 opacity-75"/>
            </div>

        </Container>
    );
}

export default Corriculum;
