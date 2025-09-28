import { useState } from 'react'
import './App.css'
import axios from "axios";
import Table from "./components/Table.jsx";

export default function App() {
    const [characterList, setCharacterList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(false);

    const getCharacterList = async () => {
        setLoadingStatus(true);
        setError(null);
        try {
            const { data } = await axios.get("https://swapi.dev/api/people/");
            setCharacterList(data.results || []);
            setShowTable(true);
        } catch (error) {
            console.error(error);
            setError(error.message || "Failed to load characters.");
            setShowTable(false);
        } finally {
            setLoadingStatus(false);
        }
    };

    const reset = () => {
        setCharacterList([]);
        setShowTable(false);
        setError(null);
    };

    return (
        <>
            <h1>Characters</h1>
            <div className="card">
                {loadingStatus ? <p>Loading…</p> : null}
                {error ? <p className="error">{error}</p> : null}
                {showTable ? <Table rows={characterList} /> : null}

                <button onClick={getCharacterList}>Load Characters</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
}