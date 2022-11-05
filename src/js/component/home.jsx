import React from "react";
import Navbar from "./navBar";
import Heading from "./heading";
import Cards from "./cards";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	return (
	
		<>
		<Navbar />
		<div class ="container">

       <Heading/>

	   <Cards/>
	   

		</div>
		<Footer/>
		</>

		
	)
};

export default Home;
