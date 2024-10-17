import React, { FC, useState } from "react";
import { Button, Col, Container, FloatingLabel, FormControl, Row, Table } from "react-bootstrap"; // Import Table from react-bootstrap
import {
    useCreateTransaktionenMutation, useGetArtQuery,
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

    const [datum, setDatum] = useState<string>("");
    const [betrag, setBetrag] = useState<string>("");
    const [beschreibung, setBeschreibung] = useState<string>("");

    //Art
    const {data: art} = useGetArtQuery('');
    const [auswahl, setAuswahl] = useState<string>("");


    //Auswahl Art der Transaktion
    const handleChangeArt = (selectedOption: any) => {
        setAuswahl(selectedOption.value)
    }


    //Handle Submit Transaktion
    const handleSubmitTransaktion = (e: React.FormEvent) => {
        e.preventDefault();

        if (!datum || !betrag || !beschreibung) {
            setFormErrorTransaktion("Bitte alle Felder ausfüllen");
            return;
        }

        createTransaktion({
            payload: {
                datum: datum,
                betrag: Number(betrag),
                beschreibung: beschreibung,
                art_id: auswahl
            }
        });

        // Resetting form fields
        setDatum("");
        setBetrag("");
        setBeschreibung("");
        setFormErrorTransaktion(null);
    };

    return (
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <div className={"container-sm"}>
                <h1>Buchhaltung</h1>

                {/* Wrap the table structure properly */}
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Beschreibung</th>
                        <th>Betrag</th>
                        <th>Art</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transaktion?.map((transaktion: any) => (
                        <tr key={transaktion.transaktion_id}>
                            <td>{dayjs(transaktion.datum).format("D.M.YYYY")}</td>
                            <td>{transaktion.beschreibung}</td>
                            <td>{transaktion.betrag.toFixed(2)} € <br /></td>
                            <td>{art?.find((a:any) => a.art_id === transaktion.art_id)?.art}</td>
                            <td>
                                <Button variant={"outline-dark"} style={{ width: '200px' }} onClick={() => removeTransaktion(transaktion.transaktion_id)}>
                                    Löschen
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <form onSubmit={handleSubmitTransaktion}>
                    <div><h2>Transaktion</h2></div>
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
                        <Row>
                            <Col>
                                <FloatingLabel label={"Datum"}>
                                    <FormControl
                                        type={"date"}
                                        value={datum}
                                        onChange={(e) => setDatum(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>


                            <Col>
                                <Select placeholder={"Art"}
                                        styles={{
                                            menu: provided => ({...provided, zIndex: 9999})
                                        }}
                                        onChange={handleChangeArt}
                                        options={art?.map((a:any)=> ({value: a.art_id, label: `${a.art}`}))}

                                />
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                        {formErrorTransaktion && <p className={"text-danger"}>{formErrorTransaktion}</p>}
                    </Container>
                </form>
            </div>
        </Container>
    );
}

export default Buchhaltung;
