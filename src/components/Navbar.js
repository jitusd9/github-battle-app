import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	var ui = 1;
	var claso = "uiButton uiButton-dark";
	const toggleUI = () => {
		console.log(ui);
		ui = 1 - ui;
		if (ui == 1) {
			claso = "uiButton uiButton-light";
			console.log(claso);
		} else {
			claso = "uiButton uiButton-dark";
			console.log(claso);
		}
	};

	return (
		<div>
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
					<button>UI Mode</button>
				</div>
			</nav>
		</div>
	);
}
