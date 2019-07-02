import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ui: true
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
				<nav className="topNav red darken-3">
					<div className="container">
						<a className="brandLogo">Github Battle</a>
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
