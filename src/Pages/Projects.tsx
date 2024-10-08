import React, {FC} from "react";
import {Badge, Carousel, Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image";
import logo from "../Images/labpa.jpg";
import account from "../Images/Fahrtenbuch/account.jpg";
import angemeldet from "../Images/Fahrtenbuch/angemeldet.jpg";
import start from "../Images/Fahrtenbuch/start.jpg";


const Projects : FC = () => {
    return(
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Projekte</h1>


            <Carousel>
                <Carousel.Item>
                    <Image src={account} alt="First slide" fluid /> {/* Use Image component correctly */}
                    <Carousel.Caption>
                        <h3 style={{color: "black"}}><Badge bg="dark">Kulturkosmos Müritz e.V. Fahrtenbuch</Badge></h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={angemeldet} alt="Second slide" fluid /> {/* Change this to another image if available */}
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={start} alt="Third slide" fluid /> {/* Same here */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </Container>
    )
}

export default Projects