import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Background from "./components/Background";
import "./App.css";

function App() {
	return (
		<div className="app-container">
			<Background />
			<div className="content-wrapper">
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
