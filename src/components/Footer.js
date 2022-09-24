import React from "react";
import Modal from "./Modal.js";
import "../css/footer.css";

export default function Footer() {
	const [modal, setModal] = React.useState(false);

	const toggle = () => {
		setModal((prevModal) => !prevModal);
	};

	return (
		<div>
			<button className="rules" onClick={() => toggle()}>
				Rules
			</button>
			{modal ? <Modal toggle={() => toggle()} /> : null}
		</div>
	);
}
