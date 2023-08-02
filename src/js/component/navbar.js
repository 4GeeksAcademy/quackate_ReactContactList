import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 py-3">
				<h3 className="mb-0 ms-4">Contact List <i className="far fa-address-book"></i></h3>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="contact-button btn me-4">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
