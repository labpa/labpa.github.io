import React, {FC, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Col, Container, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {useLoginUserMutation} from "../api/authApi";
import {useAppDispatch} from "../app/hooks";
import {setCredentials} from "../features/auth/authSlice";

const CompLogin : FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const [login] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const [error, setError] = useState<string>();


    // Todo -> Funktion
    const handleLoginEvent = async (e: any) => {
        e?.preventDefault();
        login({ email, password}).unwrap().then((response)=> {
            dispatch(setCredentials(response));
            navigate("/buchhaltung");
        }).catch(error =>{
            console.error(error);
            setError("Anmeldung fehlgeschlagen! Bitte überprüfe deine E-Mail-Adresse und dein Passwort.");
        });
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
                        {error && (
                            <div className="alert alert-danger">
                                {error} <Link to={"/neuespasswort"}>Passwort Vergessen?</Link>{" "}
                            </div>
                        )}
                    </form>

                </Col>
            </Row>
        </Container>
    )
}

export default CompLogin;