import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import "../css/play.css";

export default function Play({ setMyChoice }) {
	return (
		<div className="play">
			<img src={Triangle} className="triangle" alt="Triangle" />

			<div className="items">
				<Link to="/game">
					<div
						onClick={() => setMyChoice("paper")}
						className="icon icon-paper"
					/>
				</Link>
				<Link to="/game">
					<div
						onClick={() => setMyChoice("scissors")}
						className="icon icon-scissors"
					/>
				</Link>

				<Link to="/game">
					<div onClick={() => setMyChoice("rock")} className="icon icon-rock" />
				</Link>
			</div>
		</div>
	);
}
