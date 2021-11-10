import React, { useState, useEffect } from "react";
import CreatingUserList from "./creatinguserlist.jsx";

const Formulary = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setlist] = useState([]);
	//const [error, setError] = useState("No task, Add a task");

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		console.log("escrito usuario: " + inputValue);
		console.log(list);
	});

	const handleKeepDown = e => {
		const value = inputValue.trim();
		if (e.key === "Enter" && value !== "" && !list.includes(value)) {
			//e.key Me reconoce q tecla pincho en este caso es enter
			//console.log("presiona la tecla enter");
			setlist([...list, value]); //...list= variable.push(e.target.value)
			setInputValue("");
		}
		//    console.log("tecla: " + e.key);
	};
	const handleonChange = e => {
		setInputValue(e.target.value);
	};
	/*const changeValorInput = () => {
		if (inputValue == null) {
			setError() = true;
		} else {
			setError() = "";
		}
	};*/

	return (
		<div>
			<input
				className="input"
				type="text"
				onKeyDown={handleKeepDown}
				onChange={handleonChange}
				value={inputValue}
				placeholder={
					list.length > 0
						? "What needs to be done?"
						: "No task, Add a task"
				} //{changeValorInput}
			/>
			<CreatingUserList lista={list} setlist={setlist} />
			<p className="text-start fs-6 fst-italic">
				{" "}
				{list.length} Item Left{" "}
			</p>
		</div>
	);
};

//usuario debe apretar Enter

/*const node = document.getElementById("co");
node.addEventListener("keydown", function onEvent(event) {
	if (e.key === "Enter") {
		console.log("presion la tecla enter");
	}
});*/


export default Formulary;
