import {Input} from "antd";
import {useState} from "react";
import {WrapperInputStyle} from "./style";

function InputForm(props) {
    const {placeholder, style, ...rest} = props
    const handleChangeInput = (e) => {
        props.handleOnchange(e.target.value);
    }
    return (
            <WrapperInputStyle {...rest} style={style} placeholder={placeholder || "Nhap text"} value = {props.value} onChange = {handleChangeInput}/>
    );
}

export default InputForm;