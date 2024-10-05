import React, { FC } from "react";

const Dashboard: FC = () => {
    return (
        <div className="container-sm d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="mb-3">Pascal Bienenstein</h1>
            <h2 className="mb-4">Softwareentwickler aus Leipzig</h2>
            <p className="text-muted">Auf dieser Seite finden Sie bald Informationen über mich und aktuelle Projekte.</p>
        </div>
    );
};

export default Dashboard;
