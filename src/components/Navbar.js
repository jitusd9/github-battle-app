import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
				</div>
			</nav>
		</div>
	);
}
