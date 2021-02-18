import React from 'react';
import {Container} from "./style";
import {useSelector} from "react-redux";

import Item from "components/items/Item.js";

const Items = () => {
    const things = useSelector(state => state.things.things);
    return (
        <Container>
            {/*id w obiektach*/}
            {things.map((props,id) => <Item key={id} {...props}/>)}
        </Container>
    );
};

export default Items;