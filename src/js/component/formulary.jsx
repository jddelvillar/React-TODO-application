import React, { useState, useEffect } from "react";
import CreatingUserList from "./creatinguserlist.jsx";

const Formulary = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setlist] = useState([]);
	//const [selectedInput, setSelectedInput] = useState("no task");

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		//console.log("escrito usuario: " + inputValue);
		//console.log(list);
	});

	const handleKeepDown = e => {
		const value = inputValue.trim();
		if (e.key === "Enter" && value !== "" && !list.includes(value)) {
			//console.log("presiona la tecla enter");
			setlist([...list, value]);
			setInputValue("");
		}
		//	console.log("tecla: " + e.key);
	};
	// esto deberia actulizar selectedInput para actualizar el placeholder
	const handleonChange = e => {
		setInputValue(e.target.value);
	};
	/*esto deberia eliminar la duplicacion de elementos de la lista
	let righted = righted.filter((element, index) => {
		return righted.indexOf(element) === index;
	});*/

	return (
		<div className="border-bottom-3">
			<input
				type="text"
				onKeyDown={handleKeepDown}
				onChange={handleonChange}
				value={inputValue}
				placeholder={
					list.lenght > 0
						? "What needs to be done"
						: "No task, add a task"
				}
			/>
			<CreatingUserList lista={list} setlist={setlist} />
			<p>{list.length} item left</p>
		</div>
	);
};

export default Formulary;
