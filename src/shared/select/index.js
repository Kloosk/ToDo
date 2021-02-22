import React from 'react';
import PropTypes from 'prop-types';
import {InputSelect,Option} from "./style";

const Select = React.forwardRef(({name,options},ref) => {
    return (
        <InputSelect name={name} ref={ref}>
            {Object.entries(options).map(([key,value]) => {
                return <Option key={key} value={key}>{value}</Option>
            })}

        </InputSelect>
    )
});
Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.object,
};
export default Select;