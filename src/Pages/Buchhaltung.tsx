import React, { FC, useState } from "react";
import { Button, Col, Container, FloatingLabel, FormControl, Row, Table } from "react-bootstrap"; // Import Table from react-bootstrap
import {
    useCreateTransaktionenMutation, useGetArtQuery,
    useGetTransaktionQuery
} from "../api/buchhaltungApi";
import Select from "react-select";

const Buchhaltung: FC = () => {
    // Transaktion
    const { data: transaktion } = useGetTransaktionQuery('');
    const [createTransaktion] = useCreateTransaktionenMutation();
    const [formErrorTransaktion, setFormErrorTransaktion] = useState<string | null>(null);

    const [datum, setDatum] = useState<string>("");
    const [betrag, setBetrag] = useState<string>("");
    const [beschreibung, setBeschreibung] = useState<string>("");

    //Art
    const {data: art} = useGetArtQuery('');
    console.log(art);


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
                beschreibung: beschreibung
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
                            <td>{transaktion.datum}</td>
                            <td>{transaktion.beschreibung}</td>
                            <td>{transaktion.betrag.toFixed(2)} € <br /></td>
                            <td>{art?.find((a:any) => a.art_id === transaktion.art_id)?.art}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <form onSubmit={handleSubmitTransaktion}>
                    <div><h2>Test</h2></div>
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
                                        options={art?.map((a:any)=> ({value: a.art, label: `${a.art}`}))}

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
