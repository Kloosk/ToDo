import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, Container, Done, Flex, Title, LowerPart, Place, Time, UpperPart} from "components/items/itemTodo/ItemTodo.style";
import {deleteThings} from "../../../helpers/todoThings/deleteThing";
import {setDoneFunc} from "../../../helpers/todoThings/setDone";
import useComponentVisible from "../../../hooks/useComponentVisible";
import {autoCollapse} from "../../../helpers/autoCollapse";
import PersonalSvg from "assets/svg/personalSvg/PersonalSvg";
import BusinessSvg from "assets/svg/businessSvg/BusinessSvg";
import CheckSvg from "assets/svg/checkSvg/CheckSvg";
import DeleteSvg from "assets/svg/deleteSvg/DeleteSvg";

const ItemTodo = ({id,type,name,place,time,done}) => {
    const [ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);
    return (
        <Container onClick={() => autoCollapse(isComponentVisible,setIsComponentVisible)} collapse={isComponentVisible} ref={ref}>
            <UpperPart>
                <Flex>
                    <Done done={done}>
                        {type === "business" ? (
                            <BusinessSvg done={done}/>
                        ):(
                            <PersonalSvg done={done}/>
                        )}
                    </Done>
                    <div>
                        <Title>{name}</Title>
                        <Place>{place}</Place>
                    </div>
                </Flex>
                <Time>{time}</Time>
            </UpperPart>
            <LowerPart collapse={isComponentVisible}>
                <ButtonToolbar done={done} onClick={() => setDoneFunc(id)}>
                    <CheckSvg done={done}/>
                </ButtonToolbar>
                <ButtonToolbar onClick={() => deleteThings(id,type)}>
                    <DeleteSvg/>
                </ButtonToolbar>
            </LowerPart>
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

