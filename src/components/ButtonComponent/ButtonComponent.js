import {Button} from "antd";

function ButtonComponent({size, styleButton, styleTextButton,textButton,disabled, ...rests}) {
    return (
        <>
            <Button size ={size}
                    style={{...styleButton,
                             background: disabled ? "#ccc": styleButton.background}}
                    {...rests}
            >
                <span style={styleTextButton}>{textButton}</span>
            </Button>
        </>
    );
}
export default ButtonComponent;