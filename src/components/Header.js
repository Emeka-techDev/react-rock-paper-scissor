import React from "react";
import "../css/header.css";

export default function Header({score}) {
    return (
        <div className="header">
           
            <div className="text">
                <span>Rules</span>
                <span>Papers</span>
                <span>Scissors</span>
            </div>
            <div className="score-board">
                <span>Score</span>
                <div className="score-board-score">
                    {score}
                </div>
            </div>
        </div>
    )
}