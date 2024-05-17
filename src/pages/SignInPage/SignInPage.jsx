import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from '../../assets/Image/logo.jpg'
import {Image} from "antd";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as UserService from '../../service/UserService'
import {useMutationHooks} from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import {jwtDecode} from 'jwt-decode';
import {useDispatch} from 'react-redux'
import {updateUser} from "../../redux/Slices/UserSlice";
function SignInPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigateSignUp = () => {
        navigate('/sign-up');
    }
    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )
    const {data, isPending, isSuccess} = mutation;
    useEffect(() => {
        if (isSuccess && data?.status !== "ERR") {
            message.success()
            handleNavigateHome()
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                if (decoded?.id) {
                    handleGetUserDetail(decoded?.id, data?.access_token)
                }
            }
        } else if (data?.status === "ERR") {
            message.err()
        }
    }, [isSuccess])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleGetUserDetail = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({...res?.data, access_token: token}))
    }
    const handelChangeEmail = (value) => {
        setEmail(value)
    }
    const handleChangePassword = (value) => {
        setPassword(value)
    }
    const handleClickButton = () => {
        mutation.mutate({email, password})
    }
    const handleNavigateHome = () => {
        navigate("/");
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
                    <InputForm type={"password"} style={{marginTop: '10px'}} placeholder="password" value={password}
                               handleOnchange={handleChangePassword}/>
                    {data?.status === 'ERR' && <span style={{color: "red"}}>{data?.message}</span>}
                    <Loading isPending={isPending}>
                        <ButtonComponent size={40}
                                         disabled={!email.length || !password.length}
                                         onClick={handleClickButton}
                                         styleButton={{
                                             background: "rgb(255, 47, 60)",
                                             height: "48px",
                                             width: "100%",
                                             border: "none",
                                             borderRadius: "4px",
                                             margin: "26px 0 10px"
                                         }}
                                         textButton={"Đăng nhập"}
                                         styleTextButton={{color: "#fff", fontSize: "15px", fontWeight: "700"}}/>
                    </Loading>
                    <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài
                        khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={logo} preview={false} alt="image-logo" height='203px' width='203px'/>
                    <h4>Mua sắm tại Phone Store</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;