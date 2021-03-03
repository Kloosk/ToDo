import React from 'react';
import PropTypes from 'prop-types';
import {Input} from "shared/input/Input.style";

const InputText = React.forwardRef(({txt,name},ref) => {
    return <Input type="text" placeholder={txt} name={name} ref={ref}/>
});
InputText.propTypes = {
    name: PropTypes.string,
    txt: PropTypes.string,
};
export default InputText;