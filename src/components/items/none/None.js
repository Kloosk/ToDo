import React from 'react';
import {Container,Title,RouterLink,Button} from "./None.style"

const None = () => {
    return (
        <Container>
            <Title>Looks like you don't have any Things.</Title>
            <RouterLink to="/add"><Button>Add now</Button></RouterLink>
        </Container>
    );
};

export default None;