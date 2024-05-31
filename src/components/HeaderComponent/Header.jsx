import {Button, Col, Space, Input, Badge, Popover} from "antd";
import {
    WrapperAccountHeader,
    WrapperContentPopup,
    WrapperDiv,
    WrapperHeader,
    WrapperTextHeader,
    WrapperTitleHeader
} from "./style";
import React, {useEffect, useState} from "react";
import {UserOutlined,DownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as UserService from '../../service/UserService'
import {resetUser} from "../../redux/Slices/UserSlice";
import Loading from "../LoadingComponent/Loading";
import { searchProduct } from "../../redux/Slices/ProductSlice";
function Header({isHiddenSearch = false, isHiddenCart = false}) {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const[username, setUsername] = useState("");
    const[search, setSearch] = useState("");
    const handleNavigateLogin = () => {
        navigate('/sign-in');
    }    
    // Navigation to cart
    const handleNavigateToCard = () => {
        navigate('/cart');
    }
    const handleLogout =async () => {
        setLoading(true)
        await UserService.logoutUser()
        localStorage.removeItem('access_token');
        dispatch(resetUser())
        setLoading(false)
    }
    useEffect(() => {
        setUsername(user?.name)
        // onSearch(search)
    }, [user]);
    const  content = (
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            {user?.isAdmin  && (<WrapperContentPopup onClick={()=> {
                navigate("/system/admin")
            }}>Quản lý hệ thống</WrapperContentPopup>)}
            <WrapperContentPopup onClick={()=> {
                navigate("/profile-user")
            }}>Thông tin người dùng</WrapperContentPopup>
        </div>
    )

    // const onSearch= (e) => {
    //     // setSearch(e.targe.value)
    //     // dispatch(searchProduct(e.targe.value))
    //     // console.log(1);
    //     console.log("e", e.targe.value);
    // }

    return (
        <>
            <div style={{ background: "rgb(26, 148, 255)"}}>
            <WrapperHeader style={{ alignItems: 'center',width: "1200px", margin: "auto", justifyContent: isHiddenSearch && isHiddenCart ? 'space-between' : 'unset'}} >
                <Col span={5}>
                    <WrapperTitleHeader>PHONE STORE</WrapperTitleHeader>
                </Col>
                {!isHiddenSearch && (
                    <Col span={14}>
                        <ButtonInputSearch
                            placeholder="input search text"
                            size="large"
                            textButton="Tìm kiếm"
                            variant={false}
                            // onChange={onSearch}
                        />
                    </Col>
                )}
                  <Col span={5} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <Loading isPending={loading}>
                    <WrapperAccountHeader style={{paddingLeft: '10px'}}>
                        <UserOutlined style={{fontSize: '30px'}}/>
                        {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click" >
                                        <div style={{cursor: "pointer"}}>{username || user.email || "User"}</div>
                                    </Popover>
                                </>
                            ) :
                            <div>
                                <WrapperTextHeader onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>Đăng
                                    nhập/Đăng ký</WrapperTextHeader>
                                <div>
                                    <WrapperTextHeader>Tài khoản</WrapperTextHeader>
                                    <DownOutlined style={{fontSize: '12px'}}/>
                                </div>
                            </div>
                        }
                    </WrapperAccountHeader>
                    </Loading>
                      {!isHiddenCart && (
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                        </Badge>
                        <WrapperTextHeader onClick={handleNavigateToCard}>Giỏ hàng</WrapperTextHeader>
                    </div>
                          )}
                </Col>
            </WrapperHeader>
            </div>
        </>
    );
}
export default Header;