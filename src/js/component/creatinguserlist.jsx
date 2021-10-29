import React from "react";
import PropTypes from "prop-types";

const CreatingUserList = props => {
	const DeleteItems = indexItem => {
		props.setlist(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div className="text-center">
			<ul className="border-bottom">
				{props.lista.map((item, index) => (
					<li key={index} className="border-bottom">
						{item}
						<button
							className="btn"
							onClick={() => DeleteItems(index)}>
							<i className="fas fa-times" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

CreatingUserList.propTypes = {
	lista: PropTypes.array,
	setlist: PropTypes.func
};

export default CreatingUserList;
