import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contact-card";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({show: false });
	const [contactDelete, setContactDelete] = useState();

	return (
	<div>
		<div className="home text-center mt-4">
			{store.contacts.map((contact, i) => (
				<ContactCard contactName = {contact.name} contactAddress = {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`} contactPhone = {contact.phone} contactEmail = {contact.email} delete={() => {
					setState({ show: true});
					setContactDelete(i)}} index={i} />
			))}
			<h3>{store.contacts.length === 0 ? "No contacts added. Add contacts!" : ""}</h3>
			<br />
				<Modal show={state.show} onClose={() => setState({ show: false })} index={contactDelete}/>
		</div>
	</div>
	);
};

