import React from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AddTodoStyle, Error} from "components/addTodo/AddTodo.style"
import Submit from "shared/submit/Submit";
import InputText from "shared/input/Input";
import Select from "shared/select/Select";
import {setDataInLocalStorage} from "../../helpers/todoThings/setDataInLocalStorage";

const AddTodo = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        setDataInLocalStorage(data);
        history.push("/");
    };
        const objOfFormInputs = [
            {
                name: "type",
                value: <Select name="type" options={{business:"Business",personal:"Personal"}} ref={register}/>,
            },
            {
                name: "name",
                value: <InputText txt="Name" name="name" ref={register({required: true,maxLength:40,minLength: 3})}/>,
                errors: {
                    required:  <Error role="alert">This field is required</Error>,
                    minLength: <Error role="alert">Min length 3</Error>,
                    maxLength: <Error role="alert">Max length 40</Error>,
                }
            },
            {
                name: "place",
                value: <InputText txt="Place" name="place" ref={register({required: true})}/>,
                errors: {
                    required: <Error role="alert">This field is required</Error>,
                }
            },
            {
                name: "time",
                value: <InputText txt="Time" name="time" ref={register({required: true})}/>,
                errors: {
                    required: <Error role="alert">This field is required</Error>,
                }
            },
            {
                value: <Submit text="ADD YOUR THING"/>
            }
        ];
    return (
        <AddTodoStyle onSubmit={handleSubmit(onSubmit)}>
            {objOfFormInputs.map(el => {
              return(
                  <>
                      {el.value}
                      {el.errors && Object.entries(el.errors).map(([key,val]) => {
                          return(
                              <>
                                  {errors[el.name] && errors[el.name].type === key && val}
                              </>
                          )
                      })}
                  </>
              )
            })}
        </AddTodoStyle>
    );
};

export default AddTodo;