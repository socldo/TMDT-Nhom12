import {WrapperContent, WrapperLabelText, WrapperTextValue} from "./style";
import {Checkbox, Rate} from "antd";

function NavbarComponent() {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => <WrapperTextValue key ={option}>{option}</WrapperTextValue>)
            case 'checkbox':
                return (
                    <Checkbox.Group style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                        {options.map(option => {
                            return (
                                <Checkbox  key={option.value} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return (
                        options.map(option => {
                            return (
                                <div style={{display: 'flex', gap: '10px',  alignItems: 'center'}}>
                                <Rate style = {{fontSize: '10px'}} disabled defaultValue={option} />
                                    <span>từ {option} sao</span>
                                </div>
                            )
                        })
                )
            case 'price':
                return (
                    options.map(option => {
                        return (
                          <div style={{padding: '4px',color: 'rgb(56, 56, 61)', borderRadius: '10px', background: 'rgb(238, 238, 238)', width: 'fit-content'}}>
                              {option}
                          </div>
                        )
                    })
                )
            default:
                return
        }
    }
    return (
        <div>
            <WrapperLabelText>Lable</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Iphone', 'Android'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B'}])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', ['5', '3', '2'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Duoi 400', 'Tren 400'])}
            </WrapperContent>
        </div>
    );
}

export default NavbarComponent;