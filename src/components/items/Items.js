import React from 'react';
import {Container} from "components/items/Items.style";
import {useSelector} from "react-redux";
import Item from "components/items/itemTodo/Item";
import None from "components/items/none/None";

const Items = () => {
    const things = useSelector(state => state.things.thingsTodo);
    return (
        <Container>
            {things.length > 0 ?
                things.map(({id,...props}) => <Item key={id} id={id} {...props}/>)
                : <None/>
            }
        </Container>
    );
};

export default Items;