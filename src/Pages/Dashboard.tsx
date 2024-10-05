import React, { FC } from "react";
import ParticlesComponent from "../Components/particles"; // Adjust path if necessary
import { Col, Container, Row } from "react-bootstrap";
import foto from "../Images/foto.jpg";
import Image from 'react-bootstrap/Image';

const Dashboard: FC = () => {
    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Pascal Bienenstein</h1>
            <h2 className="mb-4 text-white">Softwareentwickler aus Leipzig</h2>
            <p className="text-white">Auf dieser Seite finden Sie bald Informationen über mich und aktuelle Projekte.</p>
            <Image src={foto} rounded width={250} height={300} /> {/* Set width and height as needed */}
        </Container>
    );
};

export default Dashboard;
