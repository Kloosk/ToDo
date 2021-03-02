import React from 'react';
import {Container} from "components/items/Items.style";
import {useSelector} from "react-redux";
import Item from "components/items/itemTodo/Item";
import None from "components/items/none/None";

const Items = () => {
    const {empty,thingsTodo} = useSelector(state => state.things);
    return (
        <Container>
            {/*nie powinno się tego tak sprawdzać, powineneś w reduxie mieć boola od tego */}
            {/*a to ma znaczenie podejścia czy generuje jakieś błędy?*/}
            {empty ? <None/> : thingsTodo.map(({id,...props}) => <Item key={id} id={id} {...props}/>)}
        </Container>
    );
};

export default Items;