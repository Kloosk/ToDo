import React from 'react';
import {Flex,H1,FlexBlock,P} from "./style";

const Counter = () => {
    return (
        <Flex>
            <FlexBlock>
                <H1>24</H1>
                <P>Personal</P>
            </FlexBlock>
            <FlexBlock>
                <H1>24</H1>
                <P>Personal</P>
            </FlexBlock>
        </Flex>
    );
};

export default Counter;