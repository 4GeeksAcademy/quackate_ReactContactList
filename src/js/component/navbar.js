import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
				<h3 className="mb-0 ms-3">Contact List <i className="far fa-address-book"></i></h3>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success me-3">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
