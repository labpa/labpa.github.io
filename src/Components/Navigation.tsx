import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../app/hooks";

const Navigation = () => {
    const {userinfo} = useAppSelector((state) => state.auth);

    const linkStyle = {
        color: "#edecd8",
        textDecoration: "none",
    };

    const activeLinkStyle = {
        color: "#ffffff",
        textDecoration: "none",
    };

    return(
        <Navbar expand={"lg"} style={{backgroundColor: "#39868e"}}>
            <Container>
                <Navbar.Brand href={"/"} style={{color: "#edecd8"}}>Pascal Bienenstein</Navbar.Brand>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className={"me-auto"}>
                        {/*<NavLink*/}
                        {/*    className={"nav-link"}*/}
                        {/*    to={"AboutMe"}*/}
                        {/*    style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}*/}
                        {/*>*/}
                        {/*    Über Mich*/}
                        {/*</NavLink>*/}
                        <NavLink className={"nav-link"} to={"Curriculum"} style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Lebenslauf</NavLink>
                        <NavLink className={"nav-link"} to={"Projects"} style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Projekte</NavLink>
                        <NavLink className={"nav-link"} to={"Signin"} style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
