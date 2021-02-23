import React from 'react';
import {Container} from "components/items/Items.style";
import {useSelector} from "react-redux";
import Item from "components/items/itemTodo/Item";

const Items = () => {
    const things = useSelector(state => state.things.thingsTodo);
    return (
        <Container>
            {things.map(({id,...props}) => <Item key={id} id={id} {...props}/>)}
        </Container>
    );
};

export default Items;