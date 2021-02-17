import React from 'react';
import {H1,Flex} from "./style";

const Text = ({text}) => {
    return(
        <Flex>
            {text.split(" ").map((el,i) => <H1 key={i}>{el}</H1>)}
        </Flex>
    )
};

export default Text;