import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, Container, Done, Flex, H1, LowerPart, P, Svg, IconToolbar, Time, UpperPart} from "./Item.style";
import {deleteThings} from "../../../helpers/todoThings/deleteThing";
import {setDoneFunc} from "../../../helpers/todoThings/setDone";
import useComponentVisible from "../../../hooks/useComponentVisible";
import {autoCollapse} from "../../../helpers/autoCollapse";
import check from "assets/svg/check.svg"
import deleteIcon from "assets/svg/delete.svg"

const Item = ({id,type,name,place,time,done}) => {
    const [ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);
    return (
        <Container onClick={() => autoCollapse(isComponentVisible,setIsComponentVisible)} collapse={isComponentVisible} ref={ref}>
            <UpperPart>
                <Flex>
                    <Done done={done}>
                        {type === "business" ? (
                            <Svg done={done} aria-hidden="true" focusable="false" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></Svg>
                        ):(
                            <Svg done={done} aria-hidden="true" focusable="false" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></Svg>
                        )}
                    </Done>
                    <div>
                        <H1>{name}</H1>
                        <P>{place}</P>
                    </div>
                </Flex>
                <Time>{time}</Time>
            </UpperPart>
            <LowerPart collapse={isComponentVisible}>
                <ButtonToolbar done={done} onClick={() => setDoneFunc(id)}>
                    <IconToolbar src={check} alt="done" done={done}/>
                </ButtonToolbar>
                <ButtonToolbar onClick={() => deleteThings(id,type)}>
                    <IconToolbar src={deleteIcon} alt="delete"/>
                </ButtonToolbar>
            </LowerPart>
        </Container>
    );
};

Item.propTypes = {
    id:PropTypes.string,
    type:PropTypes.string,
    name:PropTypes.string,
    place:PropTypes.string,
    time:PropTypes.string,
    done:PropTypes.bool
};

export default Item;

