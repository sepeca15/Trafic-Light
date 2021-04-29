import React, { useState, useEffect } from "react";

const Semaforo = () => {
	const [colorRojo, setColorRojo] = useState("rgb(102, 0, 0)"); //red off
	const [colorAmarillo, setColorAmarillo] = useState("rgb(255, 204, 0)"); //amarillo off
	const [colorVerde, setColorVerde] = useState("rgb(0, 102, 0)"); //verde off

	return (
		<div
			className="bg-dark btn-group-vertical col-1 py-3"
			style={{
				borderRadius: "10px"
			}}>
			<button
				type="button"
				className="btn m-1"
				style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					background: colorRojo
				}}
				onClick={() => {
					setColorRojo("rgb(255, 0, 0)"); //rojo on
					setColorAmarillo("rgb(255, 204, 0)"); //amarillo off
					setColorVerde("rgb(0, 102, 0)"); //verde off
				}}></button>
			<button
				type="button"
				className="btn m-1"
				style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					background: colorAmarillo
				}}
				onClick={() => {
					setColorAmarillo("rgb(255, 255, 0)"); //amarillo on
					setColorRojo("rgb(102, 0, 0)"); //rojo off
					setColorVerde("rgb(0, 102, 0)"); //verde off
				}}></button>
			<button
				type="button"
				className="btn m-1"
				style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					background: colorVerde
				}}
				onClick={() => {
					setColorVerde("rgb(0, 204, 0)");
					setColorRojo("rgb(102, 0, 0)");
					setColorAmarillo("rgb(255, 204, 0)");
				}}></button>
		</div>
	);
};

export default Semaforo;
