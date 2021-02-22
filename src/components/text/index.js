import React from 'react';
import PropTypes from 'prop-types';
import {H1,Flex} from "./style";

const Text = ({text}) => {
    return(
        <Flex>
            {text.split(" ").map((el,i) => <H1 key={i}>{el}</H1>)}
        </Flex>
    )
};
Text.propTypes = {
    text: PropTypes.string
};
export default Text;