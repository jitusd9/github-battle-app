// import React, { Component } from "react";
// import Popular from "./Popular/Popular";
// import Battle from "./Battle/Battle";

// export class Navbar extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="topNav">
// 					<ul>
// 						<li>Popular</li>
// 						<li style={deActive}>Battle</li>
// 					</ul>
// 				</div>
// 				<Battle />
// 			</div>
// 		);
// 	}
// }

// const deActive = {
// 	color: "#ccc"
// };

// export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<nav className="topNav red darken-3">
				<div className="container">
					<a className="brand-logo">Github Battle</a>
					<ul className="topUL">
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li>
							<NavLink to="/popular">Popular</NavLink>
						</li>
						<li>
							<NavLink to="/battle">Battle</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
