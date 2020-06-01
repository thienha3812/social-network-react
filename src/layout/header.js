/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  Layout, Menu, Breadcrumb, Button, Tooltip, Dropdown, Avatar,
} from 'antd';
import LazyLoad from 'react-lazyload';
import {
  UserOutlined, LaptopOutlined, NotificationOutlined, MailOutlined, CaretDownOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import { Form } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import { useSelector } from 'react-redux';
import { LoadRequest, AcceptFriend } from '../services/user';

const { Header, Content, Sider } = Layout;
const FriendRequestMenu = ({ requests }) => {   
  return (
    <Menu className="mt-3">
      {
        requests.length > 0 ? requests.map(request => (
          <Menu.Item>
            <div className="d-flex align-items-center" style={{ width: "300px" }}>
              <div>
                <Avatar size="large" src={request.avatar} />
              </div>
              <div className="pl-2">
                <small style={{ fontWeight: "700", fontSize: "17px" }} className="text-primary">{request.full_name}</small>
              </div>
              <div className="ml-auto">
                <Button type="primary" onClick={() => handleAcceptFriend({ friend_id: request.account_id })} >Đồng ý</Button>
              </div>
            </div>
          </Menu.Item>
        ))
          :
          <Menu.Item>
           Bạn chưa có lời mời kết bạn!
          </Menu.Item>
      }
    </Menu>
  )
}
const DashboardMenu = () => (
  <Menu>
    <Menu.Item>
      <li>
        <Link to="/">Home</Link>
      </li>
    </Menu.Item>
    <Menu.Item />
  </Menu>
);
const CustomHeader = () => {
  const { username, full_name, avatar } = useSelector((state) => state.authentication.user_infor);
  const [content, setContent] = useState({ profiles: [] })
  const { profiles } = content
  const fetchRequest = async () => {
    const response = await LoadRequest()
    setContent(response.data)
  }
  useEffect(() => {
    fetchRequest()
  }, [])
  return (
    <Header className="Header Top_Base ">
      <div className="logo" />
      <div>
        <ul className="Header_list-menu">
          <li><Link className="text-white" to="/du-lich">Trang chủ</Link></li>
          <li>Điều khoản</li>
          <li className="d-flex align-items-center"><Form.Control style={{ width: 300 }} placeholder="Tìm kiếm địa điểm" /></li>
        </ul>
      </div>
      <div className="ml-auto mr-4">
        <Avatar src={avatar} size="large" />
        <span className="text-white mr-2 pt-3">{full_name}</span>
        <Dropdown overlay={FriendRequestMenu({ requests: profiles })} placement="bottomCenter" className="mr-3">
          <Button type="link" shape="circle" icon={<MailOutlined style={{ fontSize: '20px', color: 'white' }} />} />
        </Dropdown>
        <Tooltip title="Hồ sơ cá nhân" className="mr-3">
          <Link to="/nguoi-dung">
            <Button type="link" shape="circle" icon={<UserOutlined style={{ fontSize: '20px', color: 'white' }} />} />
          </Link>
        </Tooltip>

        <Dropdown overlay={DashboardMenu} placement="bottomCenter">
          <Button type="link" shape="circle" icon={<CaretDownOutlined style={{ fontSize: '20px', color: 'white' }} />} />
        </Dropdown>
      </div>
    </Header>
  );
};
export default CustomHeader;
