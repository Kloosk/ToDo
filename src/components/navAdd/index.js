import React from 'react';
import {Nav,H1} from "./style";
import UndoButton from "../../shared/undoButton";

const NavAdd = () => {
    return (
        <Nav>
            <UndoButton/>
            <H1>Add new thing</H1>
        </Nav>
    );
};

export default NavAdd;