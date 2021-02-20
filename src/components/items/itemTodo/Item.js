import React,{useState} from 'react';
import {Container, Done, H1, P, Time, Svg, UpperPart, LowerPart, Flex, SvgToolbar, ButtonToolbar} from "./Item.style";
import {deleteThings} from "../../../helpers/deleteThing";
import {useDispatch} from "react-redux";

const Item = ({id,type,name,place,time}) => {
    const [collapse,setCollapse] = useState(false);
    const handleClick = () => {
        setCollapse(prevState => !prevState);
    };
    const handleDone = () => {
        localStorage.getItem("things");
    };

    return (
        <Container onClick={handleClick} collapse={collapse}>
            <UpperPart>
                <Flex>
                    <Done>
                        {type === "business" ? (
                            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></Svg>
                        ):(
                            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></Svg>
                        )}
                    </Done>
                    <div>
                        <H1>{name}</H1>
                        <P>{place}</P>
                    </div>
                </Flex>
                <Time>{time}</Time>
            </UpperPart>
            <LowerPart collapse={collapse}>
                <ButtonToolbar onClick={handleDone}>
                    <SvgToolbar aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></SvgToolbar>
                </ButtonToolbar>
                <ButtonToolbar onClick={() => deleteThings(id,type)}>
                    <SvgToolbar aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></SvgToolbar>
                </ButtonToolbar>
            </LowerPart>
        </Container>
    );
};

export default Item;