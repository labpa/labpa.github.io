import React, {FC} from "react";
import {Alert, Button, Card, Carousel, Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";


// Bilder Fahrtenbuch
import account from "../Images/Fahrtenbuch/account.jpg";
import angemeldet from "../Images/Fahrtenbuch/angemeldet.jpg";
import start from "../Images/Fahrtenbuch/start.jpg";

// Bilder Abfrageterminal
import startbildschirm from "../Images/Abfrageterminal/startbildschirm.jpg";
import negativ from "../Images/Abfrageterminal/abfrage-negativ.jpg";
import positiv from "../Images/Abfrageterminal/abfrage-positiv.jpg";
import warnung from "../Images/Abfrageterminal/abfrage-warnung.jpg"


const Projects : FC = () => {
    return(
        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles"/>
            <h1 className="mb-3 text-white">Projekte</h1>

            <Card className="text-center" style={{backgroundColor: "transparent", color: "white", maxWidth: "600px"}}>
                <Card.Body>
                    <Alert style={{backgroundColor: "black", color: "white", border: "1px solid white"}}>
                        <Alert.Heading>Abfrage Terminal</Alert.Heading>
                    </Alert>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={startbildschirm} alt="Start Screen" fluid/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={positiv} alt="Positive Outcome" fluid/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={warnung} alt="Warning Message" fluid/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={negativ} alt="Negative Outcome" fluid/>
                        </Carousel.Item>
                    </Carousel>
                    <Card.Text>
                        Implementierung einer Software für ein Terminal zur Abfrage von Arbeitszeiten und Informationen
                        zur anstehenden Schicht mit Hilfe von NFC-Technologie
                    </Card.Text>
                    <Link to={"https://github.com/labpa/Abfrage-KuKo"}>
                        <Button style={{width: '350px', backgroundColor:"black", border:"1px solid white", color:"#39868e"}}>GitHub Abfrage Terminal</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card className="text-center" style={{backgroundColor: "transparent", color: "white", maxWidth: "600px"}}>
                <Card.Body>
                    <Alert style={{backgroundColor: "black", color: "white", border: "1px solid white"}}>
                        <Alert.Heading>Fahrtenbuch</Alert.Heading>
                    </Alert>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={start} alt="Start Screen" fluid/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={angemeldet} alt="Positive Outcome" fluid/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={account} alt="Warning Message" fluid/>
                        </Carousel.Item>
                    </Carousel>
                    <Card.Text>
                        Fartenbuch erstellt mit React und Typescript. Übungsprojekt während der Ausbildung.
                    </Card.Text>
                    <Link to={"https://github.com/labpa/Fahrtenbuch-KuKo.git"}>
                        <Button style={{width: '350px', backgroundColor:"black", border:"1px solid white", color:"#39868e"}}>GitHub Fahrtenbuch</Button>
                    </Link>
                </Card.Body>
            </Card>


        </Container>
    )
}

export default Projects

