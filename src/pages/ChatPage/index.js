import React, { useEffect, useState, useRef, useMemo, useCallback, useContext } from 'react';
import styled from 'styled-components'
import { Menu, Row, Col, Avatar, Input, Typography, Button, Tooltip, Badge } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOnlineAction } from '../../actions/user_online';
import { MessageOutlined, CameraOutlined, PhoneFilled, SendOutlined } from '@ant-design/icons';
import { Message, MessageListItem, Row as RowMessage, MessageText, MessageButton, MessageButtons, MessageGroup, MessageList, MessageMedia, MessageTitle, ThemeProvider } from "@livechat/ui-kit"
import appContext from '../AppContext'
import socket from '../../utils/socket'
import { GetHistoryMessage } from '../../services/message'
import _ from 'lodash';
import classnames from 'classnames'
const WrapperContainer = styled.div`
  padding : 5% 10% 0 10%;
  height: calc(100vh - 60px);
  overflow-y:hidden;
`;

const ChatPage = () => {
    const listUser = useSelector(state => state.user_online)
    const { socket } = useContext(appContext)
    const state = useSelector(state => state)
    const account_id = state.authentication.user_infor.account_id
    const [toggle, setToggle] = useState(false)
    const [message, setMessage] = useState([])
    const [input, setInput] = useState('')
    const [selectedItem, setSelectedItem] = useState({ avatar: "" })
    const refInput = useRef(null)
    // const [listMessage,setListMessage] = useState([{is_own : true,content : "123",user : {}},{is_own : false,content:"hello"}])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOnlineAction())
    }, [dispatch])
    useEffect(() => {
        fetchHistoryMessage()
    }, [selectedItem])   
    useEffect(() => {
        try {
            socket.on("USER_RECEIVE_MESSAGE", function (data) {
                setMessage(prev => [...prev, { content: data }])
                setTimeout(()=>{
                    document.getElementsByClassName("Chat-panel__content")[0].scrollTo(0, document.getElementsByClassName("Chat-panel__content")[0].scrollHeight)
                },200)
            })
        } catch (err) {

        }
    }, [socket])
    const fetchHistoryMessage = async () => {
        const response = await GetHistoryMessage({ friend_id: selectedItem.account_id })
        const { friend_message, my_message } = response.data
        let listMessage = [...friend_message, ...my_message.map(x => ({ ...x, is_own: true }))]
        listMessage = listMessage.sort((a,b)=>{
            if(a.id < b.id){
                return -1
            }
            if(a.id > b.id){
                return 1
            }
            return 0

        })
        setMessage(listMessage)
    }
    const handeSelectedItem = (user) => {
        setToggle(true)
        setSelectedItem(user)
    }
    const handleUserInput = () => {
        socket.emit("USER_SEND_MESSAGE", JSON.stringify({ sender_id: account_id, receiver_id: selectedItem.account_id, content: input }))
        setMessage(prev => [...prev, { content: input, is_own: true }])
        setInput('')
        setTimeout(()=>{
            document.getElementsByClassName("Chat-panel__content")[0].scrollTo(0, document.getElementsByClassName("Chat-panel__content")[0].scrollHeight)
        },200)
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
                                    <small style={{ fontWeight: "bold", fontSize: "15px" }} className="ml-2">{user.full_name}</small>
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
                                            <small style={{ fontWeight: "700" }}>{selectedItem.full_name}</small>
                        <span className={classnames(selectedItem.is_online ? "bg-success" : "bg-secondary","text-center","text-white")} style={{ width: "60px", borderRadius: "10px" }}><small>{selectedItem.is_online ? "Online" : "Offline"}</small></span>
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
                        <div className="bg-white d-flex" style={toggle ? { height: "65vh" } : { height: "80vh" }}>
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
                                        <ThemeProvider >
                                            <MessageList className="w-100 Chat-panel__content" active>
                                                {message.map(m => (
                                                    m.is_own ? (
                                                        <Message isOwn>
                                                            <span style={{ backgroundColor: "#0099ff", borderRadius: "20px", width: "fit-content" }} className="ml-auto text-white p-2">
                                                                {m.content}
                                                            </span>
                                                        </Message>
                                                    ) : (
                                                            <RowMessage>
                                                                <Avatar src={selectedItem.avatar} />
                                                                <Message authorName={selectedItem.full_name} >
                                                                    <span style={{ backgroundColor: "#e6e9eb", borderRadius: "20px", width: "fit-content" }} className="text-dark p-2">
                                                                        {m.content}
                                                                    </span>
                                                                </Message>
                                                            </RowMessage>
                                                        )
                                                ))}
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
                                        <Input value={input} onChange={(e) => setInput(e.currentTarget.value)} ref={refInput} onPressEnter={handleUserInput} placeholder="Nhận nội dung cần gửi" />
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