import React from "react";
import PropTypes from "prop-types";
import "../../styles/contact.css";

import { Link } from "react-router-dom";

export const ContactCard = (props) => (
	 <div className="card contact-card">
		<div>
            <img className="contact-img" src="https://blog.tcea.org/wp-content/uploads/2020/02/1200px-Google_Contacts_icon.svg.png"/>
        </div>
        <div className="card-body info">
            <h4>{props.contactName}</h4>
            <p className="info-item"><i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;{props.contactAddress}</p>
            <p className="info-item"><i className="fas fa-phone"></i> &nbsp;&nbsp;{props.contactPhone}</p>
            <p className="info-item"><i className="fas fa-envelope"></i> &nbsp;&nbsp;{props.contactEmail}</p>
        </div>
        <div className="icon-wrapper">
        <Link to={"/editcontact/" + props.index}>
            <button className="icon edit"><i className="fas fa-pencil-alt"></i></button>
        </Link>
        <button onClick={() => {props.deleteContact(props.index)}} className="icon delete"><i className="fas fa-trash-alt"></i></button>
        </div>
	</div>
    
);