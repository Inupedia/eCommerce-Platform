import React from "react";
import {useLocation, Navigate, Routes, Route} from "react-router-dom"
import {Layout} from 'antd'
import './dashboard.less'
import memoryUtils from '../../utils/memoryUtils'
import LeftNavbar from "../../components/leftNavbar"
import Header from "../../components/header"
import Home from "../home/home"
import User from "../user/user"
import Role from "../role/role"
import Product from "../product/product"
import Category from "../category/category";
import BarChart from "../chart/bar"
import LineChart from "../chart/line"
import PieChart from "../chart/pie"

const {Content, Footer, Sider} = Layout;

export default function Dashboard() {
    const location = useLocation()
    const user = memoryUtils.user
    if (!user._id) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return (
        <Layout className="dashboard">
            <Sider>
                <LeftNavbar/>
            </Sider>
            <Layout>
                <Header/>
                <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Routes>
                            <Route path="home" element={<Home/>}></Route>
                            <Route path="user" element={<User/>}></Route>
                            <Route path="role" element={<Role/>}></Route>
                            <Route path="item/product" element={<Product/>}></Route>
                            <Route path="item/category" element={<Category/>}></Route>
                            <Route path="chart/bar" element={<BarChart/>}></Route>
                            <Route path="chart/line" element={<LineChart/>}></Route>
                            <Route path="chart/pie" element={<PieChart/>}></Route>
                        </Routes>
                </Content>
                <Footer className="footer">
                    E-Commerce Platform &copy; 2022 Created by <a href="https://github.com/Inupedia">Inupedia</a>
                </Footer>
            </Layout>
        </Layout>
    )
}
