import React, { useContext } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contact-card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="home text-center mt-4">
		{store.contacts.map((contact, i) => (
			<ContactCard contactName = {contact.name} contactAddress = {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`} contactPhone = {contact.phone} contactEmail = {contact.email} index = {i} deleteContact = {actions.deleteContact} />
		))}
		<h3>{store.contacts.length === 0 ? "No contacts added. Add contacts!" : ""}</h3>
	</div>
	);
};

