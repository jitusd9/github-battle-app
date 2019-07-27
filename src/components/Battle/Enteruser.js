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
			score1: 0,
			score2: 0,
			win1: null,
			win2: null,
			display: "display hide",
			overlay: "overlay hide",
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
			overlay: "overlay",
			formSubmit: true
		});

		setTimeout(() => {
			this.getWinner();
		}, 3000);

		return true;
	}

	getWinner() {
		let count1 =
			this.state.userOne.public_repos * 3 +
			this.state.userOne.followers +
			this.state.userOne.following * 3;
		let count2 =
			this.state.userTwo.public_repos * 3 +
			this.state.userTwo.followers +
			this.state.userTwo.following +
			3;
		if (count1 > count2) {
			this.setState({
				win1: true,
				win2: false
			});
		} else {
			this.setState({
				win1: false,
				win2: true
			});
		}
		this.setState({
			score1: count1,
			score2: count2
		});
	}

	closeDisplay = () => {
		this.setState({
			display: "display hide",
			overlay: "overlay hide"
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
						Battle!
					</button>
				</form>
				<div className={this.state.overlay} onClick={this.closeDisplay} />
				<div className={this.state.display}>
					<div className="closeBtn" onClick={this.closeDisplay}>
						X
					</div>
					<div className="wrapper">
						<div id="div1">
							<Compare
								user={this.state.userOne}
								win={this.state.win1}
								score={this.state.score1}
							/>
						</div>
						<div id="div2">
							<Compare
								user={this.state.userTwo}
								win={this.state.win2}
								score={this.state.score2}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Enteruser;
