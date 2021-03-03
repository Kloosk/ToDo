import React from 'react';
import {Flex, FlexBlock, Title, CounterText} from "components/counter/Counter.style";
import {useSelector} from "react-redux";

const Counter = () => {
    const {countPersonal,countBusiness} = useSelector(state => state.things);
    return (
        <Flex>
            <FlexBlock>
                <CounterText>{countPersonal}</CounterText>
                <Title>Personal</Title>
            </FlexBlock>
            <FlexBlock>
                <CounterText>{countBusiness}</CounterText>
                <Title>Business</Title>
            </FlexBlock>
        </Flex>
    );
};

export default Counter;