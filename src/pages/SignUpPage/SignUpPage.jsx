import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "../SignInPage/style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {Image} from "antd";
import logo from "../../assets/Image/logo.jpg";

function SignUpPage() {
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", background: "rgba(0,0,0, 0.53", height: "100vh"}}>
            <div style={{
                width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex"
            }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập và tạo tài khoản</p>
                    <InputForm placeholder ="abc@gmail.com"/>
                    <InputForm style={{marginTop:'10px'}} placeholder = "password"/>
                    <InputForm style={{marginTop:'10px'}} placeholder = "Confirm password"/>

                    <ButtonComponent size={40}
                                     styleButton={{
                                         background: "rgb(255, 47, 60)",
                                         height: "48px",
                                         width: "100%",
                                         border: "none",
                                         borderRadius: "4px",
                                         margin: "26px 0 10px"
                                     }}
                                     textButton={"Đăng ký"}
                                     styleTextButton={{color: "#fff", fontSize: "15px", fontWeight: "700"}}/>
                    <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={logo} preview={false} alt="image-logo" height='203px' width='203px'/>
                    <h4>Mua sắm tại Phone Store</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}
export default SignUpPage;