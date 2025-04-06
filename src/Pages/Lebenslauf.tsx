import React, { FC } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import BackgroundBlack from "../Components/BackgroundBlack";
import foto from "../Images/foto.jpg";
import Image from "react-bootstrap/Image";

const Corriculum: FC = () => {
    console.log("Hire ME!");
    return (
        <>
            <BackgroundBlack>
                <Container className="container-sm p-3" style={{ color: "white", backgroundColor: "black" }}>
                    {/*Header Section*/}
                    <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                        <div>
                            <Image
                                src={foto}
                                alt="Pascal Bienenstein"
                                rounded
                                style={{ width: '250px', height: '300px' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="ms-3 text-center text-md-start">
                            <h1 className="text-white mb-3" style={{ fontSize: "65px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                Pascal Bienenstein
                            </h1>
                        </div>
                    </div>

                    <hr style={{ borderColor: "#39868E" }} className="border-2 opacity-75 mb-5" />

                    {/*Skills Section*/}
                    <Row className="mb-5">
                        <Col md={6}>
                            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                <Card.Body>
                                    <Card.Title className="text-white" style={{ fontSize: "28px" }}>Sprachen</Card.Title>
                                    <ul>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>Python</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>JavaScript</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>TypeScript</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>Java</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>C#</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>SQL</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>HTML</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>CSS</h3></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                <Card.Body>
                                    <Card.Title className="text-white" style={{ fontSize: "28px" }}>Fähigkeiten</Card.Title>
                                    <ul>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>Entwicklung von progressiven Web-Applikationen (PWA) mit folgenden Technologien</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>React</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>Bootstrap</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>MariaDB</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>Supabase</h3></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <hr style={{ borderColor: "#39868E" }} className="border-2 opacity-75 mb-5" />

                    {/*Experience Section*/}
                    <Row className="mb-5">
                        <Col>
                            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                <Card.Body>
                                    <Card.Title className="text-white" style={{ fontSize: "28px" }}>Berufserfahrung</Card.Title>
                                    <ul>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2022 - 2024 Fachinformatiker für Anwendungsentwicklung, Leipzig und Lärz</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2016 - 2022 Selbstständiger Monteur - Internationale Umsetzung von Spezialmontagen für Film, Theater und Festivals.</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2015 - 2019 Gästebetreuer im Sicherheitsdienst – Internationaler Club, Berlin</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2007 - 2015 Vorarbeiter und Baustellenleiter im Garten- und Landschaftsbau – Stuttgart, Wien, Berlin</h3></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <hr style={{ borderColor: "#39868E" }} className="border-2 opacity-75 mb-5" />

                    {/*Education Section*/}
                    <Row className="mb-5">
                        <Col>
                            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                <Card.Body>
                                    <Card.Title className="text-white" style={{ fontSize: "28px" }}>Ausbildung</Card.Title>
                                    <ul>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2024 - Berufsabschluss Fachinformatiker für Anwendungsentwicklung, Leipzig</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2018 - FISAT Seilzugangs- und Positionierungstechnik Level I, Berlin</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2013 - Weiterbildung Ökologische Gartenpflege, Wien</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2013 - Weiterbildung Rasenpflege, Wien</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2013 - Weiterbildung Bewässerungssysteme, Wien</h3></li>
                                        <li><h3 className="text-white" style={{ fontSize: "20px" }}>2010 - Berufsabschluss Garten- und Landschaftsbauer, Stuttgart</h3></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <hr style={{ borderColor: "#39868E" }} className="border-2 opacity-75" />
                </Container>
            </BackgroundBlack>
        </>
    );
};

export default Corriculum;
