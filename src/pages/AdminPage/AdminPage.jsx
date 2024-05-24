import {Menu} from "antd";
import {useState} from "react";
import {getItem} from "../../utils";
import { AppstoreOutlined, UserOutlined} from '@ant-design/icons'
import Header from "../../components/HeaderComponent/Header";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
function AdminPage() {
    const items = [
        getItem('Người dùng', 'user',<UserOutlined />) ,
        getItem('Sản phẩm', 'product',<AppstoreOutlined/>)
    ]
    const [keySelected, setKeySelected] = useState('')
    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser/>
                )
            case 'product':
                return (
                    <AdminProduct/>
                )
            default: return <></>
        }

    }
    const handleOnclick = ({key}) => {
        setKeySelected(key)
    }
    return (
        <>
            <Header isHiddenSearch={true} isHiddenCart={true}/>
        <div style={{display: 'flex'}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['231']}

                style={{
                    width: 256,
                    boxShadow: '1px 1px 2px #ccc',
                    height: '100vh'
                }}
                items={items}
                onClick = {handleOnclick}
            />
            <div style={{flex: 1, padding: '15px'}}>
                {renderPage(keySelected)}
            </div>
        </div>
        </>
    );
}
export default AdminPage;