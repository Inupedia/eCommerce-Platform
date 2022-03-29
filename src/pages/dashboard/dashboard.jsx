import React from "react";
import {useLocation, Navigate} from "react-router-dom"
import {message, Layout, Button} from 'antd';
import './dashboard.less'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from "../../utils/storageUtils";

const {Header, Content, Footer, Sider} = Layout;


export default function Dashboard() {
    const location = useLocation()
    const user = memoryUtils.user
    if (!user._id) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }
    const onclick = () => {
        storageUtils.removeUser()
        message.success('log out successfully')
    }
    return (
        <Layout className="dashboard">
            <Header className="header">
                <Button onClick={onclick} className="log-out" type="primary" ghost>
                    Log out
                </Button>
            </Header>
            <Layout className="sidebar">
                <Sider>left sidebar</Sider>
                <Content>
                    Content
                </Content>
            </Layout>
            <Footer className="footer">footer</Footer>
        </Layout>
    )
}
