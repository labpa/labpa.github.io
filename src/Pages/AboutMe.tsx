import React, { FC, useEffect } from "react";
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Components/particles";
import Image from "react-bootstrap/Image";
import logo from "../Images/labpa.jpg";

const AboutMe : FC = () => {
    return(
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <ParticlesComponent id="particles" />
            <h1 className="mb-3 text-white">Vom Hauptschüler zum Softwareentwickler</h1>




        </Container>
    )
}




// Definiere die Props für die Komponente
// interface LinkedInBadgeProps {
//     locale?: string;
//     size?: "medium" | "large";
//     theme?: "dark" | "light";
//     type?: "VERTICAL" | "HORIZONTAL";
//     vanity: string;
// }
//
// // Die AboutMe-Komponente erhält Props (optional) und setzt Standardwerte
// const AboutMe: FC<LinkedInBadgeProps> = ({
//                                              locale = "de_DE",
//                                              size = "medium",
//                                              theme = "dark",
//                                              type = "VERTICAL",
//                                              vanity
//                                          }) => {
//
//     // Verwende useEffect, um das LinkedIn-Script zu laden
//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://platform.linkedin.com/badges/js/profile.js";
//         script.async = true;
//         document.body.appendChild(script);
//
//         return () => {
//             document.body.removeChild(script); // Script beim Unmount der Komponente entfernen
//         };
//     }, []);
//
//     // JSX-Rendering der LinkedIn Badge
//     return (
//         <div style={styles.container}>
//             <div
//                 className="badge-base LI-profile-badge"
//                 data-locale={locale}
//                 data-size={size}
//                 data-theme={theme}
//                 data-type={type}
//                 data-vanity={vanity}
//                 data-version="v1"
//             >
//             </div>
//         </div>
//     );
// };
//
// // Inline-CSS für die Zentrierung und Styling
// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center', // Horizontal zentrieren
//         alignItems: 'center', // Vertikal zentrieren
//         height: '100vh', // Volle Höhe des Bildschirms
//         backgroundColor: '#f0f0f0', // Leichtes Hintergrund-Design
//     } as React.CSSProperties,
// };
//
export default AboutMe;
