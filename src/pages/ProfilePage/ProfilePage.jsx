import {WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import {useEffect, useState} from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import * as UserService from '../../service/UserService'
import {useMutationHooks} from "../../hooks/useMutationHooks";
import {updateUser} from "../../redux/Slices/UserSlice";
import * as message from "../../components/Message/Message";


function ProfilePage() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');
    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAdress(user?.address)

    }, [user]);
    const mutation = useMutationHooks(
        (data) =>{
            const{id, access_token, ...rests} = data
            UserService.updateUser(id,rests,access_token)
        }
    )
    const {data, isPending, isSuccess, isError} = mutation
    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetUserDetail(user?.id, user?.access_token)
        }
        else if(isError) {
            message.err()
        }
    }, [isSuccess, isError])
    const handleGetUserDetail = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        console.log("res", res)
        dispatch(updateUser({...res?.data, access_token: token}))
    }
    console.log(name)
    const handleUpdate = () => {
        mutation.mutate({id: user?.id, email, name, phone, address, access_token: user?.access_token})
    }
    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangeName = (value) => {
        setName(value)
    }
    const handleOnchangeAddress = (value) => {
        setAdress(value)
    }
    const handleOnchangePhone = (value) => {
        setPhone(value)
    }

    return (
        <div style={{width: "1200px", margin: "auto", height: "500px"}}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperContentProfile>
                <div style={{display: "flex", gap: "20px", margin: "auto"}}>
                    <WrapperLabel htmlFor='name'>Name</WrapperLabel>
                    <WrapperInput>

                        <InputForm style={{width: "300px"}} value={name} id="name" handleOnchange={handleOnchangeName}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            styleButton={{
                                height: "30px",
                                width: "fit-content",
                                borderRadius: "4px",
                                padding: '2px 6px 6px'
                            }}
                            textButton={"Update"}
                            styleTextButton={{color: "rgb(26, 148, 255", fontSize: "15px", fontWeight: "700"}}/>
                    </WrapperInput>
                </div>
                <div style={{display: "flex", gap: "20px", margin: "auto"}}>
                    <WrapperLabel htmlFor='email'>Email</WrapperLabel>
                    <WrapperInput>
                        <InputForm style={{width: "300px"}} value={email} id="email" handleOnchange={handleOnchangeEmail}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            styleButton={{
                                height: "30px",
                                width: "fit-content",
                                borderRadius: "4px",
                                padding: '2px 6px 6px'
                            }}
                            textButton={"Update"}
                            styleTextButton={{color: "rgb(26, 148, 255", fontSize: "15px", fontWeight: "700"}}/>
                    </WrapperInput>
                </div>
                <div style={{display: "flex", gap: "20px", margin: "auto"}}>
                    <WrapperLabel htmlFor='phone'>Phone</WrapperLabel>
                    <WrapperInput>
                        <InputForm style={{width: "300px"}} value={phone} id="phone" handleOnchange={handleOnchangePhone}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            styleButton={{
                                height: "30px",
                                width: "fit-content",
                                borderRadius: "4px",
                                padding: '2px 6px 6px'
                            }}
                            textButton={"Update"}
                            styleTextButton={{color: "rgb(26, 148, 255", fontSize: "15px", fontWeight: "700"}}/>
                    </WrapperInput>
                </div>
                <div style={{display: "flex", gap: "20px", margin: "auto"}}>
                    <WrapperLabel htmlFor='address'>Address</WrapperLabel>
                    <WrapperInput>
                        <InputForm style={{width: "300px"}} value={address} id="address" handleOnchange={handleOnchangeAddress}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            styleButton={{
                                height: "30px",
                                width: "fit-content",
                                borderRadius: "4px",
                                padding: '2px 6px 6px'
                            }}
                            textButton={"Update"}
                            styleTextButton={{color: "rgb(26, 148, 255", fontSize: "15px", fontWeight: "700"}}/>
                    </WrapperInput>
                </div>


            </WrapperContentProfile>
        </div>
    );
}

export default ProfilePage;
