import React, { Component } from "react";
import "../Theme/Light.css";

export class Home extends Component {
	render() {
		return (
			<div className="homeStyle">
				<h1>Welcome to Github Battle App</h1>
				<h4>
					Powered by <span>⚛</span> React.js
				</h4>
				<p>
					This is my first Project on React.js to grasp the fundamentals of one
					of the popular font-end web technology. I've got this idea from
					React's official website{" "}
					<a href="https://reactjs.org" target="_blank">
						reactjs.org
					</a>{" "}
					to learn it.
				</p>
				<p />
				<p>👩‍💻 Happy Coding! 👨‍💻</p>
			</div>
		);
	}
}

export default Home;
