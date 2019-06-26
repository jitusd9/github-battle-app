import React, { Component } from "react";

export class Battle extends Component {
	render() {
		return (
			<div className="battleStyle">
				<h1>Instructions</h1>
				<div className="cards">
					<div>
						<p> Enter Users </p>
					</div>

					<div>
						<p> Click Battle</p>
					</div>
					<div>
						<p> See The Winner </p>
					</div>
				</div>
			</div>
		);
	}
}

export default Battle;
