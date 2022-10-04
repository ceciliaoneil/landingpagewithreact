import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<>

< Navbar/>
< Jumbotron/>
< Card/>
< Footer/>

		</>	
	);
};

export default Home;
