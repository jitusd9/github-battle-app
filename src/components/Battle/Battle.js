import React, { Component } from "react";
import Enteruser from "./Enteruser";

export class Battle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: true
		};
	}

	render() {
		const { showModal } = this.state;

		return (
			<div>
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
					{showModal && <Enteruser />}
				</div>
			</div>
		);
	}
}

export default Battle;
