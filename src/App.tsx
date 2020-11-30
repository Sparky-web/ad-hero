import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"

import Loading from "./pages/Loading";
import Steps from "./pages/Steps";
import Dashboard from "./pages/Dashboard"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Loading/>}/>
                <Route path={"steps/*"} element={<Steps />}/>
                <Route path={"dashboard/*"} element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App
