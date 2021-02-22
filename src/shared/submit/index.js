import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./style";

const Submit = ({text}) => {
    return <Button>{text}</Button>
};

Submit.propTypes = {
    text: PropTypes.string
};
export default Submit;