import React from 'react';
import {Circle, Container, Title} from "components/completed/Completed.style";
import {useSelector} from "react-redux";

const Completed = () => {
    const {count} = useSelector(state => state.things);
    return (
        <Container>
            <Title>ALL</Title>
            <Circle>{count}</Circle>
        </Container>
    );
};

export default Completed;