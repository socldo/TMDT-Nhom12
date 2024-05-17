import {Fragment, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import {isJsonStrig} from "./utils";
import {jwtDecode} from "jwt-decode";
import * as UserService from "./service/UserService";
import {updateUser} from "./redux/Slices/UserSlice";
import {useDispatch} from "react-redux"
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const {storageDta, decoded} = handleDecode() || {}
        if (decoded?.id) {
            handleGetUserDetail(decoded?.id, storageDta)
        }
    }, []);
    const handleDecode = () => {
        let storageDta = localStorage.getItem('access_token')
        let decoded = {}
        if (storageDta && isJsonStrig(storageDta)) {
            storageDta = JSON.parse(storageDta)
            if (storageDta) {
                decoded = jwtDecode(storageDta)
            }
            return {decoded, storageDta};
        }
    }
    UserService.axiosJWT.interceptors.request.use(async (config) => {
        // Do something before request is sent
        const currentTime = new Date()
        const {storageDta, decoded} = handleDecode()
        if(decoded?.exp < currentTime.getTime() / 1000) {
            const data = await UserService.refreshToken()
            config.headers['token'] = `Bearer ${data?.access_token}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    const handleGetUserDetail = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({...res?.data, access_token: token}))
    }
    return (<>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.element
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment
                        return (
                            <Route key={index} path={route.path} element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }></Route>
                        )
                    })}
                </Routes>
            </Router>
        </>
    )
}

export default App;
