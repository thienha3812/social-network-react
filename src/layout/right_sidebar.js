/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  Layout, Menu, Avatar, Badge
} from 'antd';
import {
  HomeOutlined,
} from '@ant-design/icons';
import { GetUserOnline } from '../services/user';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOnlineAction } from '../actions/user_online';

const { Sider } = Layout;


const RightSidebar = () => {
  const [toggle, setToggle] = React.useState(true);
  const dispatch = useDispatch()
  const listUser = useSelector(state => state.user_online)  
  useEffect(() => {
    dispatch(getUserOnlineAction())
  }, [dispatch])  
  return (
    <Sider width={300} collapsed className="bg-white">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        {listUser.map((user, i) => (
          <Menu.Item key={i} title={user.full_name} style={{ height: "60px" }} className="pt-2 pb-2 d-flex justify-content-center ">
            <Badge status={user.is_online == 1 ? "success" : "default"}>
              <Avatar size="large" src={user.avatar} />
            </Badge>
          </Menu.Item>
        ))}

      </Menu>
    </Sider>
  );
};

export default React.memo(RightSidebar);
