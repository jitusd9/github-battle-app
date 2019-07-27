import React, { Component } from "react";

export class Compare extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hi: "jitu"
		};
	}

	render() {
		return (
			<div>
				<div className="match container">
					<div className="row">
						<h1>User : {this.props.user1.name}</h1>
						<ul>
							<li>Bio: {this.props.user1.bio}</li>
							<li>Repos: {this.props.user1.public_repos}</li>
							<li>Followers: {this.props.user1.followers}</li>
						</ul>
					</div>
					<div className="row">
						<h1>User : {this.props.user2.name}</h1>
						<ul>
							<li>Bio: {this.props.user2.bio}</li>
							<li>Repos: {this.props.user2.public_repos}</li>
							<li>Followers: {this.props.user2.followers}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Compare;
