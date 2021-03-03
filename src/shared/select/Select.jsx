import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {InputSelect, Option} from "shared/select/Select.style";
import {CheckIconsContext} from "containers/add/Add";

const Select = React.forwardRef(({name,options},ref) => {
    const {checkIconsDispatch} = useContext(CheckIconsContext);
    return (
        <InputSelect name={name} ref={ref} onChange={() => checkIconsDispatch({type: 'SET_CHECK_ICONS'})}>
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