import React from 'react';
import {Button,Span} from "./style";
import {useDispatch} from "react-redux";
import {hamMenuToggle} from "../../redux/hamMenu/hamMenuActions";
import {closeMenu} from "../../helpers/closeMenu";

const MenuButton = () => {
    const dispatch = useDispatch();
    return (
      <Button onClick={() => dispatch(hamMenuToggle())}>
          <Span></Span>
          <Span></Span>
          <Span></Span>
      </Button>
    );
};

export default MenuButton;