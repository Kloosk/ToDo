import React, {useContext} from 'react';
import {Container,Underline} from "./CheckIcons.style";
import {CheckIconsContext} from "containers/add/Add";
import BusinessSvg from "assets/svg/businessSvg/BusinessSvg";
import PersonalSvg from "assets/svg/personalSvg/PersonalSvg";
import SelectIconInForm from "components/selectIconInForm/SelectIconInForm";

const objectOfIcons = {//order matters
    businessSvg: <BusinessSvg/>,
    personalSvg: <PersonalSvg/>
};

const CheckIcons = () => {
    const {checkIconsState} = useContext(CheckIconsContext);
    return (
        <>
            <Container>
                {
                    Object.values(objectOfIcons).map((icon,i) => <SelectIconInForm key={i}>{icon}</SelectIconInForm>)
                }
            </Container>
            <Underline choice={checkIconsState.selectCheckIcons}/>
        </>
    );
};

export default CheckIcons;