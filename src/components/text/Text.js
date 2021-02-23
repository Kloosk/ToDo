import React from 'react';
import PropTypes from 'prop-types';
import {Flex, H1} from "components/text/Text.style";

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