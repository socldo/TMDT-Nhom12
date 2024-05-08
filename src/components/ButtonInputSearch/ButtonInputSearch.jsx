import {Button, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

export const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton} = props;
    return (
        <div style={{display: "flex"}}>
            <Input size={size} placeholder={placeholder} bordered={false}
                   style={{background: "#fff", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px",  borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}}/>
            <Button size={size} icon={<SearchOutlined style={{color: "#fff"}}/>}
                    style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px",  borderTopRightRadius: "5px", borderBottomRightRadius: "5px", border: "none", background: "rgb(13, 92,182)"}}>
                <span style={{color: "#fff"}}>{textButton}</span>
            </Button>
        </div>
    )
}