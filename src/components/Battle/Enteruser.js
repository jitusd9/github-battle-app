import React, { Component } from "react";
import axios from "axios";
import Compare from "./Compare";

export class Enteruser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user1: "",
			user2: "",
			userOne: [],
			userTwo: [],
			display: "display hide",
			formSubmit: false
		};

		this.handleUser1 = this.handleUser1.bind(this);
		this.handleUser2 = this.handleUser2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getData = this.getData.bind(this);
		this.closeDisplay = this.closeDisplay.bind(this);
	}

	handleUser1(e) {
		e.preventDefault();
		this.setState({
			user1: e.target.value
		});
	}

	handleUser2(e) {
		e.preventDefault();
		this.setState({
			user2: e.target.value
		});
	}

	getData(user, id) {
		axios.get(`https://api.github.com/users/${user}`).then(response => {
			const us = response.data;
			if (id === 1) {
				this.setState({
					userOne: us
				});
			}
			if (id === 2) {
				this.setState({
					userTwo: us
				});
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.getData(this.state.user1, 1);
		this.getData(this.state.user2, 2);

		this.setState({
			display: "display",
			formSubmit: true
		});

		return true;
	}

	closeDisplay = () => {
		this.setState({
			display: "display hide"
		});
	};

	render() {
		return (
			<div>
				<form id="getUser" onSubmit={this.handleSubmit}>
					<div class="form">
						<div>
							<input
								type="text"
								class="form-control"
								value={this.state.user1}
								onChange={this.handleUser1}
								onSubmit={this.handleSubmit}
								placeholder="First Github ID"
							/>
						</div>
						<div>
							<input
								type="text"
								class="form-control"
								value={this.state.user2}
								onChange={this.handleUser2}
								onSubmit={this.handleSubmit}
								placeholder="Second Github ID"
							/>
						</div>
					</div>
					<button
						onClick={this.handleSubmit}
						type="submit"
						form="getUser"
						id="getButton"
					>
						Lets Fight!
					</button>
				</form>

				<div className={this.state.display}>
					<div className="closeBtn" onClick={this.closeDisplay}>
						X
					</div>

					<Compare user1={this.state.userOne} user2={this.state.userTwo} />
				</div>
			</div>
		);
	}
}

export default Enteruser;
