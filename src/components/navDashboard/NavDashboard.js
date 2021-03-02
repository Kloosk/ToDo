import React from 'react';
import {Flex, Nav} from "components/navDashboard/NavDashboard.style";
import Time from "components/time/Time";
import Text from "components/text/Text";
import Counter from "components/counter/Counter";

const NavDashboard = () => {
    return (
        <Nav>
            <Flex>
                <Text text={["Your","Things"]}/>
                <Counter/>
            </Flex>
            <Time/>
        </Nav>
    );
};

export default NavDashboard;