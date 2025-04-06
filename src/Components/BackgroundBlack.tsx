import React, {FC} from "react";

const BackgroundBlack: FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            {/* Setze den Hintergrund des gesamten Body */}
            <style>
                {`
                    body {
                        background-color: black;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
            <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
                {children}
            </div>

        </>
    )
}

export default BackgroundBlack;