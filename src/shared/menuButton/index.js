import React from 'react';
import {Button,Span} from "./style";

const MenuButton = ({func}) => {
    return (
      <Button onClick={() => func(true)}>
          <Span></Span>
          <Span></Span>
          <Span></Span>
      </Button>
    )
};

export default MenuButton;