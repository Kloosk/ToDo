import React from 'react';
import { useHistory } from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormStyle,Error} from "./style";
import Submit from "../../shared/submit";
import InputText from "../../shared/input";
import Select from "../../shared/select";

const Form = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        const things = localStorage.getItem("things");
        if (things !== null) {
            const arr = JSON.parse(things);
            arr.push(data);
            localStorage.setItem("things", JSON.stringify(arr));
        }else{
            const arr = [];
            arr.push(data);
            localStorage.setItem("things", JSON.stringify(arr));
        }
        history.push("/");
    };
    return (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Select name="type" options={{business:"Business",personal:"Personal"}} ref={register}/>
            <InputText txt="Name" name="name" ref={register({required: true,maxLength:20,minLength: 3})}/>
            {errors.name && errors.name.type === "required" && <Error role="alert">This field is required</Error>}
            {errors.name && errors.name.type === "minLength" && <Error role="alert">Min length 3</Error>}
            {errors.name && errors.name.type === "maxLength" && <Error role="alert">Max length 20</Error>}

            <InputText txt="Place" name="place" ref={register({required: true})}/>
            {errors.place && <Error role="alert">This field is required</Error>}

            <InputText txt="Time" name="time" ref={register({required: true})}/>
            {errors.time && <Error role="alert">This field is required</Error>}
            <Submit text="ADD YOUR THING"/>
        </FormStyle>
    );
};

export default Form;