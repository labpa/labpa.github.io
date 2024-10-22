import React, { FC } from "react";
import ParticlesComponent from "../Components/particles"; // Adjust path if necessary
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

// Bilder
import logo from "../Images/labpa.jpg";
import {Link} from "react-router-dom";


const Dashboard: FC = () => {
    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Pascal Bienenstein</h1>
            <h2 className="mb-4 text-white">Softwareentwickler aus Leipzig</h2>
            <p className="text-white">Auf dieser Seite finden Sie Informationen über mich und aktuelle Projekte.</p>
            <Image src={logo} rounded width={200} height={200} className="mb-3" /> {/* Add margin-bottom here */}
            <div className={"mb-4"}>
                <Link to={"/projects"}>
                    <Button style={{
                        width: '250px',
                        backgroundColor: "#39858E",
                        border: "1px solid #edecd8",
                        color: "#edecd8"
                    }}>Projekte</Button>
                </Link>
            </div>
        </Container>

    );
};

export default Dashboard;
