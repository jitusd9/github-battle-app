import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Battle from "./components/Battle/Battle";
import Popoular from "./components/Popular/Popular";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/battle" component={Battle} />
				<Route path="/popular" component={Popoular} />
			</div>
		</BrowserRouter>
	);
}

export default App;
