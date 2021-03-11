import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "components/items/itemTodo/ItemTodo.style";
import useComponentVisible from "../../../hooks/useComponentVisible";
import {autoCollapse} from "../../../helpers/autoCollapse";
import BottomOfTodoItem from "components/items/bottomOfTodoItem/BottomOfTodoItem";
import TopOfTodoItem from "components/items/topOfTodoItem/TopOfTodoItem";

const ItemTodo = ({id,type,name,place,time,done}) => {
    const [ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);
    return (
        <Container onClick={() => autoCollapse(isComponentVisible,setIsComponentVisible)} collapse={isComponentVisible} ref={ref}>
            <TopOfTodoItem done={done} name={name} place={place} time={time} type={type}/>
            <BottomOfTodoItem collapse={isComponentVisible} done={done} id={id} type={type}/>
        </Container>
    );
};

ItemTodo.propTypes = {
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    place:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired
};

export default ItemTodo;

