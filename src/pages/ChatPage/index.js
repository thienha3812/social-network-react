import React, { useEffect, useState, useRef, useMemo, useCallback, useContext } from 'react';
import styled from 'styled-components'
import { Menu, Row, Col, Avatar, Input, Typography, Button, Tooltip, Badge } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOnlineAction } from '../../actions/user_online';
import { MessageOutlined, CameraOutlined, PhoneFilled, SendOutlined } from '@ant-design/icons';
import { Message, MessageListItem, MessageText,MessageButton,MessageButtons,MessageGroup,MessageList,MessageMedia,MessageTitle, ThemeProvider } from "@livechat/ui-kit"
import appContext from '../AppContext'
import socket from '../../utils/socket'
const WrapperContainer = styled.div`
  padding : 5% 10% 0 10%;
  height: calc(100vh - 60px);
  overflow-y:hidden;
`;



const ChatPage = () => {
    const listUser = useSelector(state => state.user_online)
    const {socket} = useContext(appContext)    
    const state = useSelector(state => state)
    const account_id = state.authentication.user_infor.account_id
    const [toggle, setToggle] = useState(false)
    const [selectedItem, setSelectedItem] = useState({ avatar: "" })
    const refInput = useRef(null)
    // const [listMessage,setListMessage] = useState([{is_own : true,content : "123",user : {}},{is_own : false,content:"hello"}])
    const dispatch = useDispatch()    
    useEffect(() => {
        dispatch(getUserOnlineAction())
    }, [dispatch])
    const handeSelectedItem = (user) => {
        setToggle(true)
        // setMessage("")
        setSelectedItem(user)
    }
    const handleUserInput = (e) => {                    
            socket.emit("USER_SEND_MESSAGE",JSON.stringify({sender_id : account_id,receiver_id : selectedItem.account_id,content : e.currentTarget.value}))                   
            e.currentTarget.value = ""
    }
    return (
        <>
            <WrapperContainer>
                <Row>
                    <Col span={8} className="pr-2">
                        <Menu defaultSelectedKeys={""} style={{ height: "80vh", overflow: "scroll" }}>
                            <Menu.Item className="bg-white" >
                                NHẮN TIN
                           </Menu.Item>
                            <Menu.Item className="bg-white">
                                <Input.Search placeholder="Tìm kiếm bạn bè" />
                            </Menu.Item>
                            {listUser.map((user, i) => (
                                <Menu.Item key={i} onClick={() => handeSelectedItem(user)} style={{ height: "60px" }} className="d-flex align-items-center" >
                                    <Badge status={user.is_online ? "success" : "default"}>
                                        <Avatar size="large" src={user.avatar} />
                                    </Badge>
                                    <small style={{ fontWeight: "bold", fontSize: "15px" }} className="ml-2">{user.username}</small>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col span={16}  >
                        {toggle && (
                            <div className="Chat-panel__header bg-white border-bottom d-flex" style={{ height: "10vh" }}>

                                <Row className="pt-2 pl-2 w-100">
                                    <Col span={24} className="d-flex align-items-center">
                                        <div>
                                            <Avatar src={selectedItem.avatar} size="large" />
                                        </div>
                                        <div className="ml-1 d-flex flex-column">
                                            <small style={{ fontWeight: "700" }}>{selectedItem.username}</small>
                                            <span className="bg-success text-white text-center" style={{ width: "60px", borderRadius: "10px" }}><small>Online</small></span>
                                        </div>
                                        <div className="ml-auto mr-4">
                                            <Tooltip title="Gọi điện">
                                                <Button type="primary" shape="circle" icon={<PhoneFilled style={{ color: "white", fontSize: "16px" }} />} />

                                            </Tooltip>

                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        )}
                        <div className="Chat-panel__content bg-white d-flex" style={toggle ? { height: "65vh" } : { height: "80vh" }}>
                            {!toggle && (
                                <div className="h-100 d-flex align-items-center w-100 justify-content-center">
                                    <div className="w-50 ml-auto mr-auto text-center">
                                        <MessageOutlined style={{ color: "#bababa", fontSize: "40px" }} />
                                        <h5 style={{ color: "#bababa" }}>Bắt đầu cuộc trò chuyện của bạn bằng cách nhấp vào avatar ở menu nhé!</h5>
                                    </div>
                                </div>
                            )}
                            {
                                toggle && (
                                    <>
                                        <ThemeProvider>
                                            <MessageList active>
                                                <MessageGroup
                                                    avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                                                    onlyFirstWithMeta
                                                >
                                                    <Message authorName="Jon Smith" date="21:37" showMetaOnClick>
                                                        <MessageMedia>
                                                            <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                                        </MessageMedia>
                                                    </Message>
                                                    <Message authorName="Jon Smith" date="21:37">
                                                        <MessageTitle title="Message title" subtitle="24h" />
                                                        <MessageMedia>
                                                            <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                                        </MessageMedia>
                                                        <MessageText>
                                                            The fastest way to help your customers - start chatting with visitors
        </MessageText>
                                                        <MessageButtons>
                                                            <MessageButton label="View more" primary />
                                                            <MessageButton label="Cancel" />
                                                        </MessageButtons>
                                                        <MessageText>
                                                            The fastest way to help your customers - start chatting with visitors
                                                            who need your help using a free 30-day trial.
        </MessageText>
                                                        <MessageButtons>
                                                            <MessageButton label="View more" primary />
                                                            <MessageButton label="Cancel" />
                                                        </MessageButtons>
                                                    </Message>
                                                    <Message date="21:38" authorName="Jon Smith">
                                                        <MessageText>Hi! I would like to buy those shoes</MessageText>
                                                    </Message>
                                                </MessageGroup>
                                                <MessageGroup onlyFirstWithMeta>
                                                    <Message date="21:38" isOwn={true} authorName="Visitor">
                                                        <MessageText>
                                                            I love them
                                                            sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                                                            much!
        </MessageText>
                                                    </Message>
                                                    <Message date="21:38" isOwn={true} authorName="Visitor">
                                                        <MessageText>This helps me a lot</MessageText>
                                                    </Message>
                                                </MessageGroup>
                                                <MessageGroup
                                                    avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                                                    onlyFirstWithMeta
                                                >
                                                    <Message authorName="Jon Smith" date="21:37" >
                                                        <MessageText  className="bg-primary text-white border-radius">No problem!</MessageText>
                                                    </Message>
                                                    <Message
                                                        authorName="Jon Smith"
                                                        imageUrl="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png"
                                                        date="21:39"
                                                    >
                                                        <MessageText>
                                                            The fastest way to help your customers - start chatting with visitors
                                                            who need your help using a free 30-day trial.
        </MessageText>
                                                    </Message>
                                                    <Message authorName="Jon Smith" date="21:39">
                                                        <MessageMedia>
                                                            <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                                        </MessageMedia>
                                                    </Message>
                                                    <Message isOwn deliveryStatus="seen">
                                                        <MessageText>Hi!</MessageText>
                                                    </Message>
                                                </MessageGroup>
                                            </MessageList>
                                        </ThemeProvider>
                                    </>
                                )
                            }
                        </div>
                        {
                            toggle && (
                                <div className="Chat-panel__footer bg-white d-flex" style={{ height: "5vh" }}>
                                    <div className="mb-2 w-100 pl-2 pr-2">
                                        <Input  ref={refInput} onPressEnter={handleUserInput}  placeholder="Nhận nội dung cần gửi" />
                                    </div>
                                </div>
                            )
                        }

                    </Col>
                </Row>
            </WrapperContainer>
        </>
    )
}

export default ChatPage