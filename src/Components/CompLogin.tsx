import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, FloatingLabel, FormControl, Row} from "react-bootstrap";

const CompLogin : FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    console.log(email);
    console.log(password);

    // Todo -> Funktion
    const handleLoginEvent = () => {
        console.log("Hallo Welt");
    }


    return(
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h1 className={" mb-3 text-white"}>Login</h1>
                    <form onSubmit={handleLoginEvent}>
                        <FloatingLabel label={"Email-Adresse"}>
                            <FormControl
                                type={"email"}
                                placeholder={"beispiel@beispiel.de"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel className={"mt-3"} label={"Passwort"}>
                            <FormControl
                                type={"password"}
                                placeholder={"Passwort"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </FloatingLabel>
                        <div className="d-flex justify-content-center mt-3">
                            <Button style={{
                                width: '350px',
                                backgroundColor: 'black',
                                border: '1px solid white',
                                color: '#39868e'
                            }} type="submit">Anmelden</Button>
                        </div>
                    </form>

                </Col>
            </Row>
        </Container>
    )
}

export default CompLogin;