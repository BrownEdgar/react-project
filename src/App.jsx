import React from 'react'
import { useState } from "react";
import './App.css';
export default function App() {
    const [text, setText] = useState("...");

    return (<>
        <div className="main-wrapper">
            <div className="btns-wrapper">
                <button onClick={((event) => setText(event.target.textContent))}>A</button>
                <button onClick={((e) => setText(e.target.textContent))}>B</button>
                <button onClick={((e) => setText(e.target.textContent))}>C</button>
                <button onClick={((e) => setText(e.target.textContent))}>D</button>
            </div>
            <div className="result-wrapper">
                <div className="result">{text}</div>
            </div>
        </div>
    </>)
}
