import React from 'react';
import PropTypes from 'prop-types';
import {Done, Flex, Place, Time, Title,Container} from "components/items/topOfTodoItem/TopOfTodoItem.style"
import BusinessSvg from "assets/svg/businessSvg/BusinessSvg";
import PersonalSvg from "assets/svg/personalSvg/PersonalSvg";

const TopOfTodoItem = ({done,name,type,place,time}) => {
    return (
        <Container>
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
        </Container>
    );
};

TopOfTodoItem.propTypes = {
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    place:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired
};

export default TopOfTodoItem;