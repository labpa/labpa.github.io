import React, { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import { useGetTriggerQuery, useCreateTriggerMutation } from "../api/buchhaltungApi";

const Angemeldet: FC = () => {
    const { data: trigger, isLoading, isError, error } = useGetTriggerQuery('');
    const [createTrigger] = useCreateTriggerMutation();
    const [zahl, setZahl] = useState(0); // Zustand für die Zahl, die gesendet wird

    // useEffect, um jede Stunde eine Zahl und das aktuelle Datum zu senden
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date().toISOString(); // Aktuelles Datum im ISO-Format

            // Sende die Zahl und das Datum an die API
            createTrigger({ payload: { zahl, datum: currentDate } }); // Sende Zahl und Datum im Payload

            // Erhöhe die Zahl
            setZahl(prevZahl => prevZahl + 1);
        }, 3600000); // 3600000ms = 1 Stunde

        // Aufräumen der Interval-Funktion, wenn die Komponente unmontiert wird
        return () => clearInterval(interval);
    }, [zahl, createTrigger]); // Abhängig von 'zahl', damit bei jeder Erhöhung eine neue Zahl gesendet wird


    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Angemeldet</h1>
        </Container>
    );
};

export default Angemeldet;
