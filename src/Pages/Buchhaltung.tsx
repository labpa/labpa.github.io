import React, { FC, useState } from "react";
import { Button, Col, Container, FloatingLabel, FormControl, Row, Table } from "react-bootstrap";
import {
    useCreateTransaktionenMutation, useGetArtQuery, useGetLadenQuery,
    useGetTransaktionQuery, useRemoveTransaktionMutation
} from "../api/buchhaltungApi";
import Select from "react-select";
import dayjs from "dayjs";

const Buchhaltung: FC = () => {
    // Transaktion
    const { data: transaktion } = useGetTransaktionQuery('');
    const [createTransaktion] = useCreateTransaktionenMutation();
    const [removeTransaktion] = useRemoveTransaktionMutation();
    const [formErrorTransaktion, setFormErrorTransaktion] = useState<string | null>(null);


    const [datumTransaktion, setDatumTransaktion] = useState<string>("");
    const [betrag, setBetrag] = useState<string>("");
    const [beschreibung, setBeschreibung] = useState<string>("");

    //Art
    const { data: art } = useGetArtQuery('');
    const [auswahlArt, setAuswahlArt] = useState<string>("");

    // Laden
    const {data: laden} = useGetLadenQuery('');
    const [name, setName] = useState<string>("");
    const [stadt, setStadt] = useState<string>("");
    const [auswahlLaden, setAuswahlLaden] = useState<string>("");
    console.log(auswahlLaden);

    // Handle Art Selection
    const handleChangeArt = (selectedOption: any) => {
        setAuswahlArt(selectedOption.value);
    }

    //Handle Laden Selection
    const handelChangeLaden = (selectedOption: any) => {
        setAuswahlLaden(selectedOption.value);

    }

    // Handle Transaktion Submission
    const handleSubmitTransaktion = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!datumTransaktion || !betrag || !beschreibung || !auswahlArt) {
            setFormErrorTransaktion("Bitte alle Felder ausfüllen");
            return;
        }

        try {
            await createTransaktion({
                payload: {
                    datum: datumTransaktion,
                    betrag: Number(betrag),
                    beschreibung: beschreibung,
                    art_id: auswahlArt,
                    laden_id: auswahlLaden
                }
            });
            setDatumTransaktion("");
            setBetrag("");
            setBeschreibung("");
            setFormErrorTransaktion(null); // Clear error
        } catch (error) {
            setFormErrorTransaktion("Fehler beim Hinzufügen der Transaktion");
        }
    };

    const handleSubmitLaden = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Laden hinzufügen:", name, stadt);
        // Handle Laden logic here
        setName("");
        setStadt("");
    };

    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center p-3">
            <div className={"container-sm"}>
                <h1 className={"text-center"}>Buchhaltung</h1>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Beschreibung</th>
                        <th>Betrag</th>
                        <th>Art</th>
                        <th>Aktionen</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transaktion?.map((transaktion: any) => (
                        <tr key={transaktion.transaktion_id}>
                            <td>{dayjs(transaktion.datum).format("D.M.YYYY")}</td>
                            <td>{transaktion.beschreibung}</td>
                            <td>{transaktion.betrag.toFixed(2)} €</td>
                            <td>{art?.find((a: any) => a.art_id === transaktion.art_id)?.art}</td>
                            <td>
                                <Button variant={"outline-dark"}
                                        onClick={() => removeTransaktion(transaktion.transaktion_id)}>
                                    Löschen
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <form onSubmit={handleSubmitTransaktion}>
                    <h2 className={"g-2 mb-3"}>Transaktion</h2>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Beschreibung"}>
                                    <FormControl
                                        type={"text"}
                                        value={beschreibung}
                                        onChange={(e) => setBeschreibung(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Betrag"}>
                                    <FormControl
                                        type={"number"}
                                        value={betrag}
                                        onChange={(e) => setBetrag(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <Select placeholder={"Laden"}
                                        onChange={handelChangeLaden}
                                        options={laden?.map((a: any)=> ({value: a.laden_id, label:a.name}))}
                                        styles={{menu: provided => ({...provided, zIndex: 9999})}}
                                />



                            </Col>
                            <Col >
                                <Select placeholder={"Art"}
                                        onChange={handleChangeArt}
                                        options={art?.map((a: any) => ({value: a.art_id, label: a.art}))}
                                        styles={{menu: provided => ({...provided, zIndex: 9999})}}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <FloatingLabel label={"Datum"}>
                                    <FormControl
                                        type={"date"}
                                        value={datumTransaktion}
                                        onChange={(e) => setDatumTransaktion(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-4 mt-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                        {formErrorTransaktion && <p className={"text-danger"}>{formErrorTransaktion}</p>}
                    </Container>
                </form>

                <form onSubmit={handleSubmitLaden}>
                    <h2 className={"g-2 mb-3"}>Laden</h2>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Name"}>
                                    <FormControl
                                        type={"text"}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Stadt"}>
                                    <FormControl
                                        type={"text"}
                                        value={stadt}
                                        onChange={(e) => setStadt(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>
            </div>
        </Container>
    );
}

export default Buchhaltung;

