import React from 'react';
import {Container} from "./style";
import {useSelector} from "react-redux";

import Item from "./itemTodo/Item";

const Items = () => {
    const things = useSelector(state => state.things.things);
    return (
        <Container>
            {things.map(({id,...props},idx) => <Item key={id} idx={idx} {...props}/>)}
        </Container>
    );
};

export default Items;