import React from 'react';
import {Container,Ul,Li,Button} from "./hamMenu.style";
import {removeAllThings} from "../../helpers/todoThings/removeAllThings";
import {useSelector} from "react-redux";

const HamMenu = () => {
    const menuStatus = useSelector(props => props.menu.hamMenu);
    return (
        <Container menuStatus={menuStatus}>
            <Ul>
                <Li><Button onClick={() => removeAllThings()}>Remove all</Button></Li>
            </Ul>
        </Container>
    );
};

export default HamMenu;