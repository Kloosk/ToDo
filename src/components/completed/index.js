import React from 'react';
import {Container,P,Circle} from "./style";
import {useSelector} from "react-redux";

const Completed = () => {
    const {count} = useSelector(state => state.things);
    return (
        <Container>
            <P>ALL</P>
            <Circle>{count}</Circle>
        </Container>
    );
};

export default Completed;