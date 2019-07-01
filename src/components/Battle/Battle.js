import React, { Component } from "react";

export class Battle extends Component {
	render() {
		return (
			<div className="battleStyle">
				<h1>Instructions</h1>
				<div className="cards">
					<div>
						<p> Enter Users </p>
						<span className="icon">
							<i class="fas fa-user-friends" />
						</span>
					</div>

					<div>
						<p> Click Battle</p>
						<span className="icon">
							<i class="fas fa-fighter-jet" />
						</span>
					</div>
					<div>
						<p> See The Winner </p>
						<span className="icon">
							<i class="fas fa-trophy" />
						</span>
					</div>
				</div>
			</div>
		);
	}
}

const icon = {
	fontSize: "4rem",
	color: "#24292e",
	lineHeight: 0,
	textShadow: "0 10px 2px rgba(0,0,0,0.15)"
};

export default Battle;
