import React from "react";
import ReactDOM from "react-dom";
import "../css/modal.css";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

export default function Modal({toggle}){

    return ReactDOM.createPortal(
        
            <div className="modal-container">
                <div className="modal-box">
                    <div className="modal-header">
                        <h1> Rules </h1>
                        <button onClick={toggle}>
                            <img src={close} alt="close"/>
                        </button>
                    </div>

                    <img src={rules} alt="rules" />
                </div>
            </div>,
            document.getElementById("modal") 
    );
}