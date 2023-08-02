import React from "react";
import PropTypes from "prop-types";

export const Modal = () => (
    <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Delete Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Are you sure you want to delete this contact?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="yes btn btn-primary">Yes</button>
                <button type="button" className="no btn btn-secondary" data-dismiss="modal">No</button>
            </div>
            </div>
        </div>
    </div>
);