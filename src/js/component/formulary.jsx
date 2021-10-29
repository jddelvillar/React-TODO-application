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
		if (e.key === "Enter") {
			//console.log("presiona la tecla enter");
			setlist([...list, inputValue]);
			setInputValue("");
		}
		//	console.log("tecla: " + e.key);
	};
	// esto deberia actulizar selectedInput para actualizar el placeholder
	const handleonChange = e => {
		setInputValue(e.target.value);
	};

	return (
		<div className="border-bottom-3">
			<input
				type="text"
				onKeyDown={handleKeepDown}
				onChange={handleonChange}
				value={inputValue}
				placeholder="No task, add one..."
			/>
			<CreatingUserList lista={list} setlist={setlist} />
			<p>{list.length} item left</p>
		</div>
	);
};

export default Formulary;
