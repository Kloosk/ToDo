import React from 'react';
import {Button, Container, Li, Ul} from "components/hamMenu/HamMenu.style";
import {removeAllThings} from "../../helpers/todoThings/removeAllThings";
import useComponentVisible from "../../hooks/useComponentVisible";
import MenuButton from "shared/menuButton/MenuButton";

const HamMenu = () => {
    const [ ref, isComponentVisible,setIsComponentVisible] = useComponentVisible(false);
    return (
        <>
            <MenuButton func={setIsComponentVisible}/>
            {isComponentVisible && (<Container ref={ref}>
                <Ul>
                    <Li><Button onClick={() => {removeAllThings();setIsComponentVisible(false)}}>Remove all</Button></Li>
                </Ul>
            </Container>)}
        </>
    );
};

export default HamMenu;