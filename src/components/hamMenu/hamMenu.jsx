import React from 'react';
import {Container,Ul,Li,Button} from "./hamMenu.style";
import {removeAllThings} from "../../helpers/todoThings/removeAllThings";
import useComponentVisible from "../../hooks/useComponentVisible";
import MenuButton from "../../shared/menuButton";

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