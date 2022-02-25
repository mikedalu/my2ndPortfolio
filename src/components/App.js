import React from "react";
import "./App.scss";
import { About, Footer, Header, Skills, Work } from "./container/index.jsx";
import Navbar from "./Navbar/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
