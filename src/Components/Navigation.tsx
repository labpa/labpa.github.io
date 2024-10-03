import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar expand={"lg"} className={"bg-body-tertiary"} bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>LabPa</Navbar.Brand>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className={"me-auto"}>
                        <NavLink className={"nav-link"} to={"AboutMe"}>Über Mich</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;