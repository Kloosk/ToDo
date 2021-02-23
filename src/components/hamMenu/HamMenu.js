import React from 'react';
import {Button, Container, ExitBtn, Ul} from "components/hamMenu/HamMenu.style";
import {removeAllThings} from "../../helpers/todoThings/removeAllThings";
import useComponentVisible from "../../hooks/useComponentVisible";
import MenuButton from "shared/menuButton/MenuButton";

const HamMenu = () => {
    const [ ref, isComponentVisible,setIsComponentVisible] = useComponentVisible(false);
    return (
        <>
            <MenuButton func={setIsComponentVisible}/>
            <Container ref={ref} show={isComponentVisible}>
                <ExitBtn onClick={() => setIsComponentVisible(false)}/>
                <Ul>
                    <li><Button onClick={() => {removeAllThings();setIsComponentVisible(false)}}>Remove all</Button></li>
                </Ul>
            </Container>
        </>
    );
};

export default HamMenu;