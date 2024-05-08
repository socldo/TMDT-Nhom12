import {Button, Col, Space, Input, Badge} from "antd";
import {WrapperAccountHeader, WrapperDiv, WrapperHeader, WrapperTextHeader, WrapperTitleHeader} from "./style";
import React from "react";
import { SearchOutlined, UserOutlined,DownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";
function Header() {
    return (
        <>
            <WrapperHeader  style={{alignItems: 'center'}}>
                <Col span={5}>
                          <WrapperTitleHeader>PHONE STORE</WrapperTitleHeader>
                </Col>
                <Col span={14}>
                    <ButtonInputSearch
                        placeholder="input search text"
                        size="large"
                        textButton = "Tìm kiếm"
                        // onSearch={onSearch
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap:'54px', alignItems: 'center'}}>
                    <WrapperAccountHeader style={{paddingLeft: '10px'}}>
                        <UserOutlined style={{fontSize: '30px'}} />
                        <div>
                            <WrapperTextHeader>Đăng nhập/Đăng ký</WrapperTextHeader>
                            <div>
                                <WrapperTextHeader>Tài khoản</WrapperTextHeader>
                                <DownOutlined style = {{fontSize: '12px'}} />
                            </div>
                        </div>
                    </WrapperAccountHeader>
                    <div >
                        <Badge count ={4} size ="small" >
                            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}} />
                        </Badge>
                        <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
                    </div>
                </Col>

            </WrapperHeader>
        </>
    );
}
export default Header;