import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import "../css/play.css"

export default function Play({setMyChoice}) {
    function setChoice(event) {
        setMyChoice(event.target.dataset.id)
    }
    return (
        <div className="play">
          
        <img src={Triangle} className="triangle"></img>

        <div className="items">
            <Link to="/game" >
               <div data-id="paper" onClick={setChoice} className="icon icon-paper" >
              
               </div>
            </Link> 
            <Link to="/game">
                <div data-id="scissors" onClick={setChoice} className="icon icon-scissors">
                
                </div>
            </Link>

            <Link to="/game">
                <div data-id="rock" onClick={setChoice} className="icon icon-rock" >
                  
                </div>
            </Link>
        
        </div>

        </div>
    )
}