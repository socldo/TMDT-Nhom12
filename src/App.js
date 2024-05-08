import {Button} from "antd";
import {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterSlice} from "./redux/Slices/CounterSlice"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import HomePage from "./pages/HomePage/HomePage";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";

function App() {
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
