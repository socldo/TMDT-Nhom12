import {Input} from "antd";
import {useState} from "react";
import {WrapperInputStyle} from "./style";

function InputForm(props) {
    const {valueInput, setValueInput} = useState('');
    const {placeholder, style, ...rest} = props
    return (
            <WrapperInputStyle style={style} placeholder={placeholder} value={valueInput} {...rest} />
    );
}

export default InputForm;