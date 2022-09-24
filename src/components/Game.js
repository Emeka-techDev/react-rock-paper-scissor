import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/game.css";

export default function Game({ myChoice, setScore }) {
	const [house, setHouse] = useState("");
	const [playerWin, setPlayerWin] = useState("");
	const [counter, setCounter] = useState(3);

	const newHousePick = () => {
		const choices = ["rock", "paper", "scissors"];
		setHouse(choices[Math.floor(Math.random() * choices.length)]);
	};

	useEffect(() => {
		newHousePick();
	}, []);

	const Result = useCallback(() => {
		if (
			(myChoice === "rock" && house === "scissors") ||
			(myChoice === "scissors" && house === "paper") ||
			(myChoice === "paper" && house === "rock")
		) {
			setPlayerWin("Win");
			setScore((prevScore) => ++prevScore);
		} else if (
			(myChoice === "rock" && house === "paper") ||
			(myChoice === "scissors" && house === "rock") ||
			(myChoice === "paper" && house === "scissors")
		) {
			setPlayerWin("Lose");
			setScore((prevScore) => --prevScore);
		} else {
			setPlayerWin("Draw");
		}
	}, [house, myChoice, setScore]);

	useEffect(() => {
		const timer =
			counter > 0
				? setInterval(() => {
						setCounter(counter - 1);
				  }, 1000)
				: Result();

		return () => clearInterval(timer);
	}, [Result, counter, house]);

	return (
		<div className="game">
			<div className="game-you">
				<div className="text">You Picked</div>
				<div
					className={`icon icon-${myChoice} ${
						playerWin === "Win" ? `icon icon-${myChoice}-winner` : ""
					}`}
				>
					{" "}
				</div>
			</div>

			{playerWin === "Win" && (
				<div className="game-play">
					<div className="text">You Win</div>
					<Link to="/" className="play-again" onClick={() => setHouse()}>
						Play Again?
					</Link>
				</div>
			)}

			{playerWin === "Lose" && (
				<div className="game-play">
					<div className="text">You Lose</div>
					<Link to="/" className="play-again" onClick={() => setHouse()}>
						Play Again?
					</Link>
				</div>
			)}

			{playerWin === "Draw" && (
				<div className="game-play">
					<span className="text">You Draw</span>
					<Link to="/" className="play-again" onClick={() => setHouse()}>
						Play Again?
					</Link>
				</div>
			)}

			{counter === 0 ? (
				<div className="game-house">
					<div className="text">The House Picked </div>
					<div
						className={`icon icon-${house} ${
							playerWin === "Lose" ? `icon icon-${house}-winner` : ""
						}`}
					></div>
				</div>
			) : (
				<div className="counter">{counter}</div>
			)}
		</div>
	);
}
