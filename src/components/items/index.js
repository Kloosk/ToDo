import React from 'react';
import {Container} from "./style";
import {useSelector} from "react-redux";

import Item from "../item/Item";

const Items = () => {
    const things = useSelector(state => state.things.things);
    console.log(things);
    return (
        <Container>
            {things.map(({id,...rest}) => <Item key={id} {...rest}/>)}
        </Container>
    );
};

export default Items;