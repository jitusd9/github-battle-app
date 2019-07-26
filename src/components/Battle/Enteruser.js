import React, { Component } from "react";
import axios from "axios";
import GetData from "./getData";

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
		console.log(user, id);

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

	render() {
		const formSubmit = this.state.formSubmit;

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
				{formSubmit === true ? (
					// <Compare
					// 	guyOne={this.state.userOne.name}
					// 	guyTwo={this.state.userTwo.name}
					// 	show={this.state.display}
					// />
					<GetData />
				) : (
					console.log("no worries")
				)}

				<li>User 1: {this.state.userOne.name}</li>
				<li>User 2: {this.state.userTwo.name}</li>
			</div>
		);
	}
}

export default Enteruser;
