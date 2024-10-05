import React, { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation";

// Pages
import Dashboard from "./Pages/Dashboard";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";
import Impressum from "./Components/Impressum";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App: FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100"> {/* Flex Container für das gesamte Layout */}
            <div className="container-sm flex-grow-1"> {/* Container für den Inhalt */}
                <Navigation />

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

            <Footer /> {/* Footer bleibt immer am unteren Ende */}
        </div>
    );
}

export default App;