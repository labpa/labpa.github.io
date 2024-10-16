import React, {FC} from "react";
import {Container} from "react-bootstrap";
import {useGetTestenQuery} from "../api/buchhaltungApi";



const Buchhaltung : FC = () => {
    const {data: test} = useGetTestenQuery('');
    console.log(test);
    return(
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <div className={"container-sm"}>
                <h1>Buchhaltung</h1>
                {test?.map((test: any) => (
                    <tr key={test.nummer}>
                        <td>
                            {test.nummer}
                        </td>
                        <td>
                            {test.name} <br/>
                        </td>

                    </tr>
                ))}


            </div>
            <h1 className="mb-3 text-white">Buchhaltung</h1>
        </Container>
    )
}

export default Buchhaltung;