/* eslint-disable */
import React from 'react';
import {
  Layout, Menu,
} from 'antd';
import {
  HomeOutlined, MessageOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

const { Sider } = Layout;
const LeftSidebar = () => {
  const [, setToggle] = React.useState(true);
  const history = useHistory()
  const navigate = (url) =>{ 
    history.push({pathname:url})
  }
  return (
    <Sider width={300} collapsed className="bg-white">
      <Menu

        mode="inline"
        defaultSelectedKeys={['1']}
        style={{transform:"translateY(35vh)",position:"fixed"}}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item onClick={()=> navigate("/du-lich")} key="1" icon={<HomeOutlined style={{fontSize:"20px"}} />}>
          Trang chủ
        </Menu.Item>
        <Menu.Item onClick={()=> navigate("/nhan-tin")}  key="2" icon={<MessageOutlined style={{fontSize:"20px"}} />}>                      
            Nhắn tin
        </Menu.Item>
        
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
