import React from "react";
import {useLocation, Navigate} from "react-router-dom"
import {message, Layout, Button} from 'antd';
import './dashboard.less'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from "../../utils/storageUtils";
import LeftNavbar from "../../components/leftNavbar"
import Header from "../../components/header"

const {Content, Footer, Sider} = Layout;

export default function Dashboard() {
    const location = useLocation()
    const user = memoryUtils.user
    let collapsedState = false;
    if (!user._id) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    const onclick = () => {
        storageUtils.removeUser()
        message.success('log out successfully')
    }
    return (
        <Layout className="dashboard">
            <Sider>
                <LeftNavbar/>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer className="footer">
                    E-Commerce Platform &copy; 2022 Created by <a href="https://github.com/Inupedia">Inupedia</a>
                </Footer>
            </Layout>
        </Layout>
    )
}
