import React, {useContext} from 'react';
import {Container, SelectionElement,Underline,Icon} from "./CheckIcons.style";
import {CheckIconsContext} from "containers/add/Add";
import personal from 'assets/svg/personal.svg'
import business from 'assets/svg/business.svg'

const CheckIcons = () => {
    const {checkIconsState} = useContext(CheckIconsContext);
    return (
        <>
            <Container>
                <SelectionElement>
                    <Icon src={business} alt="business"/>
                </SelectionElement>
                <SelectionElement>
                    <Icon src={personal} alt="personal"/>
                </SelectionElement>
            </Container>
            <Underline choice={checkIconsState.selectCheckIcons}/>
        </>
    );
};

export default CheckIcons;