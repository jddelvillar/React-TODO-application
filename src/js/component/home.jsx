import React from "react";
import Formulary from "./formulary.jsx";

//create your first component
const Home = () => {
	return (
		<div className="card shadow p-3 mb-5 ">
			<div className="container notebook text-center mt-5 shadow p-3 mb-5 bg-body ">
				<h2 className="mb-4">TODO LIST</h2>
				<div className="checklist w-50 mx-auto">
					<Formulary />
				</div>
			</div>
		</div>
	);
};


/*<div class="card" style="width: 18rem;">
	<img src="..." class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title"></h5>
		<Formulary />
	</div>
</div>;*/

export default Home;
