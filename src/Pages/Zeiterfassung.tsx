import React, {FC} from "react";
import {Container} from "react-bootstrap";

const Zeiterfassung: FC = () => {
    return (
        <Container className={"container-sm d-flex justify-content-center align-items-center p-3"}>
            <div className={"container-sm"}>
                <h1 className={"text-center"}>Zeiterfassung</h1>
            </div>
        </Container>
    )
}

export default Zeiterfassung;

