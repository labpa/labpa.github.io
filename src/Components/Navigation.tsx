import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar expand={"lg"} className={"bg-body-tertiary"} bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>Pascal Bienenstein</Navbar.Brand>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className={"me-auto"}>
                        <NavLink className={"nav-link"} to={"AboutMe"}>Über Mich</NavLink>
                        <NavLink className={"nav-link"} to={"Curriculum"}>Lebenslauf</NavLink>
                        <NavLink className={"nav-link"} to={"Projects"}>Projekte</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;