import React from "react";
import Formulary from "./formulary.jsx";

//create your first component
const Home = () => {
	return (
		<div className="card bg-success p-2 text-dark bg-dark">
			<div className="container text-center bg-white shadow-lg p-3 mb-5 bg-body rounded">
				<h1>To Do Things...</h1>
				<div className="boxy">
					<div className="checklist">
						<Formulary />
					</div>
				</div>
			</div>
		</div>
	);
};

/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <Formulary />
    
  </div>
</div>*/

export default Home;
