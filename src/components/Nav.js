import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ui: false
		};

		this.toggleUI = this.toggleUI.bind(this);
	}

	toggleUI() {
		this.setState({
			ui: !this.state.ui
		});
	}

	render() {
		return (
			<div className={this.state.ui ? "dark" : null}>
				<nav className="topNav ">
					<div className="container">
						<h3>Github Battle</h3>
						<ul className="topUL">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/popular">Popular</Link>
							</li>
							<li>
								<Link to="/battle">Battle</Link>
							</li>
						</ul>
						<button
							onClick={this.toggleUI}
							className={
								this.state.ui
									? "uiButton uiButton-dark"
									: "uiButton uiButton-light"
							}
							title="UI"
						>
							💡
						</button>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
