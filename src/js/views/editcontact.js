import React, { useState, useContext, useEffect } from "react";
import "../../styles/addcontact.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newStreet, setNewStreet] = useState("");
    const [newSuite, setNewSuite] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newZipcode, setNewZipcode] = useState("");

    useEffect(() => {
        if (store.contacts && store.contacts.length > 0 && store.contacts[params.index]) {
            setNewName(store.contacts[params.index].name), setNewEmail(store.contacts[params.index].email), setNewPhone(store.contacts[params.index].phone), setNewStreet(store.contacts[params.index].address.street), setNewSuite(store.contacts[params.index].address.suite), setNewCity(store.contacts[params.index].address.city), setNewZipcode(store.contacts[params.index].address.zipcode)
        }
    }, [store.contacts])

    return (
        <div className="form-contact m-5">
            <h1 className="text-center">Add a new contact!</h1>
            <div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name</label>
                    <input type="text" value={newName} onChange={(e) => {setNewName(e.target.value)}} className="form-control" id="fullname" placeholder="Enter Full Name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" value={newEmail} onChange={(f) => {setNewEmail(f.target.value)}} className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" value={newPhone} onChange={(g) => {setNewPhone(g.target.value)}} className="form-control" id="phone" placeholder="Enter Phone" />
                </div>
                <div className="d-flex">
                    <div className="address mb-3 me-2">
                        <label for="street" className="form-label">Street</label>
                        <input type="text" value={newStreet} onChange={(h) => {setNewStreet(h.target.value)}} className="form-control" id="street" placeholder="Enter Street" />
                    </div>
                    <div className="address mb-3 mx-2">
                        <label for="suite" className="form-label">Suite</label>
                        <input type="text" value={newSuite} onChange={(i) => {setNewSuite(i.target.value)}} className="form-control" id="suite" placeholder="Enter Suite" />
                    </div>
                    <div className="address mb-3 mx-2">
                        <label for="city" className="form-label">City</label>
                        <input type="text" value={newCity} onChange={(j) => {setNewCity(j.target.value)}} className="form-control" id="city" placeholder="Enter City" />
                    </div>
                    <div className="address mb-3 ms-2">
                        <label for="zipcode" className="form-label">Zipcode</label>
                        <input type="text" value={newZipcode} onChange={(k) => {setNewZipcode(k.target.value)}} className="form-control" id="zipcode" placeholder="Enter Zipcode" />
                    </div>
                </div>
                
                <button type="button" onClick={() => {actions.editContact(params.index, newName, newEmail, newPhone, newStreet, newSuite, newCity, newZipcode)}} className="mb-2 save-button btn btn-primary">Modify Contact</button>
            </div>
            <Link to="/">
                <p>go back to contacts</p>
            </Link>
        </div>
    );
};