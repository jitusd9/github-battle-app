import React, { Component } from "react";

export class Compare extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="match container">
					<div className="row">
						<img
							src={`https://avatars3.githubusercontent.com/u/${
								this.props.user.id
							}?v=4`}
							alt="Avatar"
						/>

						<div className="stats">
							<h3>{this.props.user.name}</h3>
							<ul>
								<li>
									<span>🏢</span>Location: {this.props.user.location}
								</li>
								<li>
									<span>📁</span> Repos: {this.props.user.public_repos}
								</li>
								<li>
									<span>📢</span> Followers: {this.props.user.followers}
								</li>
								<li>
									<span>📣</span> Following: {this.props.user.following}
								</li>
							</ul>
							<a
								id="gitId"
								href={this.props.user.html_url}
								target="_blank"
								title={`${this.props.user.name}'s Github Account`}
							>
								github.com/
								{this.props.user.login}
							</a>
						</div>
						<h2>{this.props.score}</h2>
						<h1>{this.props.win ? "Winner" : "Loser"}</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Compare;
