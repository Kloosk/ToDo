import React from 'react';
import {Input} from "./style";

const InputText = React.forwardRef(({txt,name},ref) => {
    return <Input type="text" placeholder={txt} name={name} ref={ref}/>
});

export default InputText;