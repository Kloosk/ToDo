import React from 'react';
import {Circle, Container, P} from "components/completed/Completed.style";
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