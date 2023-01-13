import React from 'react'

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function NavBar() {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Burd's Tool Shop</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Tools</a>
				<a href="/#">Contractors</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavBar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavBar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavBar;


