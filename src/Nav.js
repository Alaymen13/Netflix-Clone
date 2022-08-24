import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./images/netflix_logo.png";
import Avatar from "./images/avatar.png";

function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<a href="/">
				<img
					className="nav_logo"
					src={logo}
					alt="Netflix Logo"
				/>
			</a>

			<img 
			className="nav_avatar" 
			src={Avatar} 
			alt="Avatar logo" />
		</div>
	);
}

export default Nav;
