import React, { useState, useContext } from "react";
import "../../styles/addcontact.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newStreet, setNewStreet] = useState("");
    const [newSuite, setNewSuite] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newZipcode, setNewZipcode] = useState("");

    return (
        <div className="form-contact m-5">
            <h1 className="text-center">Add a new contact!</h1>
            <div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name</label>
                    <input type="text" onChange={(e) => {setNewName(e.target.value)}} className="form-control" id="fullname" placeholder="Enter Full Name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" onChange={(f) => {setNewEmail(f.target.value)}} className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" onChange={(g) => {setNewPhone(g.target.value)}} className="form-control" id="phone" placeholder="Enter Phone" />
                </div>
                <div className="d-flex">
                    <div className="address mb-3 me-2">
                        <label for="street" className="form-label">Street</label>
                        <input type="text" onChange={(h) => {setNewStreet(h.target.value)}} className="form-control" id="street" placeholder="Enter Street" />
                    </div>
                    <div className="address mb-3 mx-2">
                        <label for="suite" className="form-label">Suite</label>
                        <input type="text" onChange={(i) => {setNewSuite(i.target.value)}} className="form-control" id="suite" placeholder="Enter Suite" />
                    </div>
                    <div className="address mb-3 mx-2">
                        <label for="city" className="form-label">City</label>
                        <input type="text" onChange={(j) => {setNewCity(j.target.value)}} className="form-control" id="city" placeholder="Enter City" />
                    </div>
                    <div className="address mb-3 ms-2">
                        <label for="zipcode" className="form-label">Zipcode</label>
                        <input type="text" onChange={(k) => {setNewZipcode(k.target.value)}} className="form-control" id="zipcode" placeholder="Enter Zipcode" />
                    </div>
                </div>
                
                <button type="button" onClick={() => {actions.addContact({name: newName, email: newEmail, phone: newPhone, address: {street: newStreet, suite: newSuite, city: newCity, zipcode: newZipcode}})}} className="mb-2 save-button btn btn-primary">Save Contact</button>
            </div>
            <Link to="/">
                <p>go back to contacts</p>
            </Link>
        </div>
    );
};