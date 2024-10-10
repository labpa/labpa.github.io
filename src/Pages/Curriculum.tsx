import React, { FC } from "react";
import {Col, Container, Row} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import foto from "../Images/foto.jpg";
import Image from "react-bootstrap/Image";


const Corriculum: FC = () => {
    return (
        <Container className="container-sm p-3" style={{color:"white"}}>
            <ParticlesComponent id="particles"/>

            <div className="d-flex align-items-center flex-column flex-md-row" >
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
                        <h2>Fähigkeiten</h2>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <h3>Entwicklung von progressiven Web-Applikationen (PWA) mit folgenden Technologien</h3>
                            </li>
                            <li>
                                <h3>React</h3>
                            </li>
                            <li>
                                <h3>TypeScript</h3>
                            </li>
                            <li>
                                <h3>JavaScript</h3>
                            </li>
                            <li>
                                <h3>HTML</h3>
                            </li>
                            <li>
                                <h3>CSS</h3>
                            </li>
                            <li>
                                <h3>Bootstrap</h3>
                            </li>
                            <li>
                                <h3>SQL</h3>
                            </li>
                            <li>
                                <h3>MariaDB</h3>
                            </li>
                            <li>
                                <h3>Supabase</h3>
                            </li>
                            <li>
                                <h3>Java</h3>
                            </li>
                            <li>
                                <h3>C#</h3>
                            </li>


                        </ul>


                    </Col>
                </Row>
                <hr style={{borderColor: "#39868E"}} className="border-end border-2 opacity-75"/>


                <Row>
                    <Col>
                        <h2>Berufserfahrung</h2>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <h3>2022 -2024 Fachinformatiker für Anwendungsentwicklung, Leipzig und Lärz</h3>
                            </li>
                            <li>
                                <h3>2016 - 2022 Selbstständiger Monteur - Internationale Umsetzung von Spezialmontagen
                                    für Film, Theather und Festivals. </h3>
                            </li>
                            <li>
                                <h3>2015 - 2019 Gästebetreuer im Sicherheitsdienst – Internationaler Club, Berlin </h3>
                            </li>
                            <li>
                                <h3>2007 - 2015 Vorarbeiter und Baustellenleiter im Garten- und Landschaftsbau –
                                    Stuttgart, Wien, Berlin</h3>
                            </li>
                        </ul>


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
                                <h3>2024 - Berufsabschluss Fachinformatiker für Anwendungsentwicklung, Leipzig</h3>
                            </li>
                            <li>
                                <h3>2018 - FISAT Seilzugangs- und Positionierungstechnik Level I, Berlin</h3>
                            </li>
                            <li>
                                <h3>2013 - Weiterbildung Ökologische Gartenpflege, Wien</h3>
                            </li>
                            <li>
                                <h3>2013 - Weiterbildung Rasenpflege, Wien</h3>
                            </li>
                            <li>
                                <h3>2013 - Weiterbildung Bewässerungssysteme, Wien</h3>
                            </li>
                            <li>
                                <h3>2010 - Berufsabschluss Garten- und Landschaftsbauer, Stuttgart</h3>
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
