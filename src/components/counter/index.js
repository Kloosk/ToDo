import React from 'react';
import {Flex,H1,FlexBlock,P} from "./style";
import {useSelector} from "react-redux";

const Counter = () => {
    const {countPersonal,countBusiness} = useSelector(state => state.things);
    return (
        <Flex>
            <FlexBlock>
                <H1>{countPersonal}</H1>
                <P>Personal</P>
            </FlexBlock>
            <FlexBlock>
                <H1>{countBusiness}</H1>
                <P>Business</P>
            </FlexBlock>
        </Flex>
    );
};

export default Counter;