import React, { useState, useContext, useEffect, Fragment } from "react";
import Toast from "react-bootstrap/Toast";

const ToastSuccess = props => {
    //

    return (
    <Toast
        onClose={() => props.setShowToast(false)}
        show={props.showToast}
        delay={3000}
        autohide
    >
        <Toast.Header>
            <strong className="mr-auto">{props.event.name.toUpperCase()}</strong>
        </Toast.Header>
        <Toast.Body>Event Joined!</Toast.Body>
        </Toast>
    )
}

export default ToastSuccess;