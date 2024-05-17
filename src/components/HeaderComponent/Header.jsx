import {Button, Col, Space, Input, Badge, Popover} from "antd";
import {
    WrapperAccountHeader,
    WrapperContentPopup,
    WrapperDiv,
    WrapperHeader,
    WrapperTextHeader,
    WrapperTitleHeader
} from "./style";
import React, {useState} from "react";
import {UserOutlined,DownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as UserService from '../../service/UserService'
import {resetUser} from "../../redux/Slices/UserSlice";
import Loading from "../LoadingComponent/Loading";
function Header() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const handleNavigateLogin = () => {
        navigate('/sign-in');
    }
    const handleLogout =async () => {
        setLoading(true)
        await UserService.logoutUser()
        localStorage.removeItem('access_token');
        dispatch(resetUser())
        setLoading(false)
    }
    const  content = (
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
        </div>
    )
    return (
        <>
            <WrapperHeader style={{alignItems: 'center'}}>
                <Col span={5}>
                    <WrapperTitleHeader>PHONE STORE</WrapperTitleHeader>
                </Col>
                <Col span={14}>
                    <ButtonInputSearch
                        placeholder="input search text"
                        size="large"
                        textButton="Tìm kiếm"
                        // onSearch={onSearch
                    />
                </Col>
                <Col span={5} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <Loading isPending={loading}>
                    <WrapperAccountHeader style={{paddingLeft: '10px'}}>
                        <UserOutlined style={{fontSize: '30px'}}/>
                        {user?.name ? (
                                <>
                                    <Popover content={content} trigger="click">
                                        <div style={{cursor: "pointer"}}>{user.name}</div>
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
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                        </Badge>
                        <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
                    </div>
                </Col>

            </WrapperHeader>
        </>
    );
}
export default Header;