import React, {FC} from "react";
import {Button, Container} from "react-bootstrap";
import {useAppSelector} from "../app/hooks";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../features/auth/authSlice";

const Status : FC = () => {
    const {userinfo} = useAppSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }
    console.log(userinfo.user.email);

    return(
        <Container>
            <Button
                className={"align-items-center"}style={{
                width: '100px',
                backgroundColor: 'black',
                border: '1px solid white',
                color: 'white'
            }} onClick={handleLogout}>Logout</Button>
        </Container>
    )
}

export default Status