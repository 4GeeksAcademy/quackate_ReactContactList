import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Modal = (props) => {
    const { actions } = useContext(Context);
    return (
            <div className={"modal " + (props.show ? "d-block" : "d-none")} tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Confirmation</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body fs-5">
                                <p>Are you sure you want to delete this contact?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => {actions.deleteContact(props.index); props.onClose()}} className="yes btn btn-primary">Yes</button>
                                <button type="button" className="no btn btn-secondary" data-dismiss="modal" onClick={() => {
								props.onClose()}}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
};

Modal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};