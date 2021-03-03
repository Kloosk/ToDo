import React from 'react';
import {Container} from "components/items/Items.style";
import {useSelector} from "react-redux";
import ItemTodo from "components/items/itemTodo/ItemTodo";
import None from "components/items/none/None";

const Items = () => {
    const {empty,thingsTodo} = useSelector(state => state.things);
    return (
        <Container>
            {empty ? <None/> : thingsTodo.map(({id,...props}) => <ItemTodo key={id} id={id} {...props}/>)}
        </Container>
    );
};

export default Items;