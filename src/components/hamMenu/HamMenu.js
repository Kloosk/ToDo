import React, {useState} from 'react';
import {Button, Container, ExitBtn, Ul} from "components/hamMenu/HamMenu.style";
import useComponentVisible from "../../hooks/useComponentVisible";
import MenuButton from "shared/menuButton/MenuButton";
import DeleteAlertPortal from "components/hamMenu/deleteAlertPortal/DeleteAlertPortal";

export const DeleteAlertContext = React.createContext(false);

const HamMenu = () => {
    const [ ref, isComponentVisible,setIsComponentVisible] = useComponentVisible(false);
    const [showDeleteAlert,setShowDeleteAlert] = useState(false);
    return (
        <DeleteAlertContext.Provider value={{showDeleteAlertState:showDeleteAlert,showDeleteAlertDispatch:setShowDeleteAlert}}>
            <MenuButton func={setIsComponentVisible}/>
            <Container ref={ref} show={isComponentVisible}>
                <ExitBtn onClick={() => setIsComponentVisible(false)}/>
                <Ul>
                    <li><Button onClick={() => {setIsComponentVisible(false); setShowDeleteAlert(true)}}>Remove all</Button></li>
                </Ul>
            </Container>
            <DeleteAlertPortal/>
        </DeleteAlertContext.Provider>
    );
};

export default HamMenu;