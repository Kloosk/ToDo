import React,{useContext} from 'react';
import {Container,Window,Msg,Flex,BtnMsg} from "components/hamMenu/deleteAlertPortal/deleteAlert/DeleteAlert.style";
import {removeAllThings} from "helpers/todoThings/removeAllThings";
import {DeleteAlertContext} from "components/hamMenu/HamMenu";

const DeleteAlert = () => {
    const {showDeleteAlertState,showDeleteAlertDispatch} = useContext(DeleteAlertContext);
    return (
        <>
        <Container show={showDeleteAlertState}/>
        <Window show={showDeleteAlertState}>
            <Msg>Are you sure you want delete all things?</Msg>
            <Flex>
                <BtnMsg onClick={() => {showDeleteAlertDispatch(false);removeAllThings()}}>Yes</BtnMsg>
                <BtnMsg onClick={() => showDeleteAlertDispatch(false)}>No</BtnMsg>
            </Flex>
        </Window>
        </>
    );
};

export default DeleteAlert;