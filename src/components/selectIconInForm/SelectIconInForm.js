import React from 'react';
import {Container} from "components/selectIconInForm/SelectIconInForm.style";

const SelectIconInForm = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default SelectIconInForm;