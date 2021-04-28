import React, { useState, useEffect } from "react";

const Semaforo = () => {
	const [colorRojo, setColorRojo] = useState("rgb(102, 0, 0)");
	const [colorAmarillo, setColorAmarillo] = useState("rgb(255, 204, 0)");
	const [colorVerde, setColorVerde] = useState("rgb(0, 102, 0)");

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
					colorRojo === "rgb(102, 0, 0)"
						? setColorRojo("rgb(255, 0, 0)")
						: colorAmarillo === "rgb(255, 255, 0)"
						? setColorAmarillo("rgb(255, 204, 0)")
						: colorVerde === "rgb(0, 204, 0)"
						? setColorVerde("rgb(0, 102, 0)")
						: setColorRojo("rgb(102, 0, 0)");
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
					colorAmarillo === "rgb(255, 204, 0)"
						? setColorAmarillo("rgb(255, 255, 0)")
						: colorRojo === "rgb(255, 0, 0)"
						? setColorRojo("rgb(102, 0, 0)")
						: colorVerde === "rgb(0, 204, 0)"
						? setColorVerde("rgb(0, 102, 0)")
						: setColorAmarillo("rgb(255, 204, 0)");
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
					colorVerde === "rgb(0, 102, 0)"
						? setColorVerde("rgb(0, 204, 0)")
						: colorRojo === "rgb(255, 0, 0)"
						? setColorRojo("rgb(102, 0, 0)")
						: colorAmarillo === "rgb(255, 255, 0)"
						? setColorAmarillo("rgb(255, 204, 0)")
						: setColorVerde("rgb(0, 102, 0)");
				}}></button>
		</div>
	);
};

export default Semaforo;
