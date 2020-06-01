/* eslint-disable */
import React from 'react';
import {
  Layout, Menu,
} from 'antd';
import {
  HomeOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const LeftSidebar = () => {
  const [, setToggle] = React.useState(true);
  return (
    <Sider width={300} collapsed className="bg-white">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Trang chủ
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
