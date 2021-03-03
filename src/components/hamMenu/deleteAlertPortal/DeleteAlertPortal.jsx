import React from 'react';
import ReactDOM from 'react-dom';
import DeleteAlert from "components/hamMenu/deleteAlertPortal/deleteAlert/DeleteAlert";

const DeleteAlertPortal = () => {
    return ReactDOM.createPortal(
        <DeleteAlert/>,
        document.getElementById("delete-alert")
    )
};

export default DeleteAlertPortal;