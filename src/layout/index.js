/* eslint-disable */
import React from 'react';
import { Layout } from 'antd';
import CustomHeader from './header'
import LeftSidebar from './left_sidebar'
import RightSidebar from './right_sidebar';
const { Header, Content, Sider } = Layout;
import LoadingScreen from '../components/LoadingScreen'
const CustomLayout = ({ children }) => (
    <Layout>
        <LoadingScreen>
            <CustomHeader />
            <Layout>
                <LeftSidebar />
                <Content style={{ minHeight: '90vh' }}>
                    {children}
                </Content>
                <RightSidebar />
            </Layout>
        </LoadingScreen>
    </Layout>
);

export default React.memo(CustomLayout)