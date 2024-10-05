import React, { FC } from "react";
import ParticlesComponent from "../Components/particles"; // Adjust path if necessary
import { Container } from "react-bootstrap";

const Dashboard: FC = () => {
    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3">Pascal Bienenstein</h1>
            <h2 className="mb-4">Softwareentwickler aus Leipzig</h2>
            <p className="text-muted">Auf dieser Seite finden Sie bald Informationen über mich und aktuelle Projekte.</p>
        </Container>
    );
};

export default Dashboard;
