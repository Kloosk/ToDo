import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, Container} from "components/items/bottomOfTodoItem/BottomOfTodoItem.style";
import {setDoneFunc} from "helpers/todoThings/setDone";
import CheckSvg from "assets/svg/checkSvg/CheckSvg";
import {deleteThings} from "helpers/todoThings/deleteThing";
import DeleteSvg from "assets/svg/deleteSvg/DeleteSvg";

const BottomOfTodoItem = ({collapse,done,type,id}) => {
    return (
        <Container collapse={collapse}>
            <ButtonToolbar done={done} onClick={() => setDoneFunc(id)}>
                <CheckSvg done={done}/>
            </ButtonToolbar>
            <ButtonToolbar onClick={() => deleteThings(id,type)}>
                <DeleteSvg/>
            </ButtonToolbar>
        </Container>
    );
};

BottomOfTodoItem.propTypes = {
    collapse:PropTypes.bool.isRequired,
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired
};

export default BottomOfTodoItem;