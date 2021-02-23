import React from 'react';
import {H1, Nav} from "components/navAdd/NavAdd.style";
import UndoButton from "shared/undoButton/UndoButton";

const NavAdd = () => {
    return (
        <Nav>
            <UndoButton link="/"/>
            <H1>Add new thing</H1>
        </Nav>
    );
};

export default NavAdd;