import React, { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation";
import "./App.css";

// Pages
import Dashboard from "./Pages/Dashboard";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";
import Impressum from "./Pages/Impressum";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProtectedRoute from "./Pages/protection/ProtectedRoute";
import Angemeldet from "./Pages/Angemeldet";
import Buchhaltung from "./Pages/Buchhaltung";
import Status from "./Components/Status";
import Login from "./Pages/Login";
import Lebenslauf from "./Pages/Lebenslauf";
import Zeiterfassung from "./Pages/Zeiterfassung";

const App: FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100"> {/* Flex Container für das gesamte Layout */}
            <div className="flex-grow-1"> {/* Container für den Inhalt */}
                <Navigation />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/lebenslauf" element={<Lebenslauf/> }/>
                    <Route path="/login" element={<Login/>}/>
                    {/*<Route path={"/buchhaltung"} element={<Buchhaltung/>}/>*/}

                    //Ab hier nur nach Login
                    <Route element={<ProtectedRoute/>}>
                        <Route path={"/angemeldet"} element={<Angemeldet/>}/>
                        <Route path={"/buchhaltung"} element={<Buchhaltung/>}/>
                        <Route path={"/zeiterfassung"} element={<Zeiterfassung/>}/>

                    </Route>



                </Routes>
            </div>

            <Footer /> {/* Footer bleibt immer am unteren Ende */}
        </div>
    );
}

export default App;
