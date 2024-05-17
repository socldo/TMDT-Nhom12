import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "../SignInPage/style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {Image} from "antd";
import logo from "../../assets/Image/logo.jpg";
import {useEffect, useState} from "react";
import * as UserService from '../../service/UserService'
import {useMutationHooks} from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import {useNavigate} from "react-router-dom";

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const mutation = useMutationHooks(
        data => UserService.signUpUser(data)
    )
    console.log("Mutation", mutation)
    const {data, isPending, isSuccess} = mutation;
    useEffect(() => {
        if (isSuccess && data?.status !== "ERR") {
            message.success()
            handleNavigateSignIn()
        } else if(data?.status === "ERR") {
            message.err()
        }
    }, [isSuccess]);

    const handelChangeEmail = (value) => {
        setEmail(value)
    }
    const handleNavigateSignIn = () => {
        navigate("/sign-in")
    }

    const handleChangePassword = (value) => {
        setPassword(value)
    }
    const handleChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }
    const handleSignUp = () => {
        mutation.mutate({email, password, confirmPassword});
    }
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            background: "rgba(0,0,0, 0.53",
            height: "100vh"
        }}>
            <div style={{
                width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex"
            }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập và tạo tài khoản</p>
                    <InputForm placeholder="abc@gmail.com" value={email} handleOnchange={handelChangeEmail}/>
                    <InputForm type = {"password"} style={{marginTop: '10px'}} placeholder="password" value={password}
                               handleOnchange={handleChangePassword}/>
                    <InputForm type = {"password"} style={{marginTop: '10px'}} placeholder="Confirm password" value={confirmPassword}
                               handleOnchange={handleChangeConfirmPassword}/>
                    {data?.status === 'ERR' && <span style={{color: "red"}}>{data?.message}</span>}
                    <Loading isPending={isPending}>
                        <ButtonComponent
                            onClick={handleSignUp}
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            size={40}
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
                    </Loading>
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