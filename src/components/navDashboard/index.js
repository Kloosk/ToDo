import React from 'react';
import {Flex, Nav} from "./style";
import MenuButton from "../../shared/menuButton";
import Time from "../time";
import Text from "../text";
import Counter from "../counter";

const NavDashboard = () => {
    return (
        <Nav>
            <MenuButton/>
            <Flex>
                <Text text="Your Things"/>
                <Counter/>
            </Flex>
            <Time/>

        </Nav>
    );
};

export default NavDashboard;