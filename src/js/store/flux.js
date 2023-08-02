import { Modal } from "../component/modal";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {

			getInitialContacts: () => {
				//get the store
				const store = getStore();

				fetch('https://jsonplaceholder.typicode.com/users')
				.then(function(response) {
					if (response.ok) {
						return response.json();
					}
					else {
						throw Error('Could not access the data requested');
					}
				})
				.then(data => {
					setStore({contacts: data});
				})
				.catch(error => {
					console.log(error);
				});
			},
			addContact: (contact) => {
				//get the store
				const store = getStore();

				const newContact = store.contacts.concat(contact)

				//reset the global store
				setStore({ contacts: newContact });
				console.log(store.contacts)
			},
			deleteContact: (index) => {
				//get the store
				const store = getStore();

				const newContact = store.contacts.filter((contact, i) => {
					//if (<Modal className="yes"/>) {
						return index !== i
					//}
				})

				//reset the global store
				setStore({ contacts: newContact });
			},
			editContact: (index, newName, newEmail, newPhone, newStreet, newSuite, newCity, newZipcode) => {
				//get the store
				const store = getStore();

				const newContact = store.contacts.map((contact, i) => {
					if (index == i) {
						contact.name = newName, contact.email = newEmail, contact.phone = newPhone, contact.address.street = newStreet, contact.address.suite = newSuite, contact.address.city = newCity, contact.address.zipcode = newZipcode;
					}

					return contact;
				})

				//reset the global store
				setStore({ contacts: newContact });
			}
		}
	};
};

export default getState;
