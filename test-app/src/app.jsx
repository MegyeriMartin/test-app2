import { useState } from "react";
import Box from "./box";

function App() {
    const [message, setMessage] = useState("Kezdeti üzenet");

    return (
        <div>
            <h1>React alkalmazás</h1>

            <h2>{message}</h2>

            <Box text="Első Box" onClick={() => setMessage("Clicked!")} />

            <Box text="Második Box" onClick={() => setMessage("Clicked!")} />

            <Box text="Harmadik Box" onClick={() => setMessage("Clicked!")} />
        </div>
    );
}

export default App;
