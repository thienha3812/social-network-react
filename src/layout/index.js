/* eslint-disable */
import React from 'react';
import { Layout } from 'antd';
import CustomHeader from './header'
import LeftSidebar from './left_sidebar'
import RightSidebar from './right_sidebar';
const { Header, Content, Sider } = Layout;
const CustomLayout = ({children}) => (
  <Layout>
      <CustomHeader/>
      <Layout>
          <LeftSidebar />
          <Content>
              {children}
          </Content>
          <RightSidebar/>
      </Layout>
  </Layout>
);

export default CustomLayout