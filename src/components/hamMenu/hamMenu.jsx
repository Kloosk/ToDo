import React from 'react';
import {Container,Ul,Li} from "./hamMenu.style";
import {removeAllThings} from "../../helpers/removeAllThings";
import {useSelector} from "react-redux";

const HamMenu = () => {
    const menuStatus = useSelector(props => props.menu.hamMenu);
    return (
        <Container menuStatus={menuStatus}>
            <Ul>
                <Li onClick={() => removeAllThings()}>Remove all</Li>
            </Ul>
        </Container>
    );
};

export default HamMenu;