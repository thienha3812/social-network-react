import React, { useState, useRef, useMemo, useEffect } from 'react'
import {
    Row, Col, Rate, Typography, Avatar, Button, Tooltip, Card, message, Menu, Tabs, Dropdown
} from 'antd';
import styled from 'styled-components';
import './style.scss'
import { useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { HeartFilled, CameraOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
const WrapperContainer = styled.div`  
    padding : 0 5% 0 5%; 
    height:100vh; 

`;

import { LoadProfile, AddFriend, AcceptFriend, CancleAcept } from '../../services/user'
import { LikePost, UserComment } from '../../services/post';




const menuAddFriend = ({ handleAccept, handleCancleAcept, is_friended }) => {
    return (
        <Menu >
            <Menu.Item key="1" onClick={handleAccept}>Đồng ý</Menu.Item>

            {is_friended === true && <Menu.Item key="2" onClick={handleCancleAcept}>Huỷ kết bạn</Menu.Item>}
            {is_friended === false && <Menu.Item key="2" onClick={handleCancleAcept}>Từ chối</Menu.Item>}
        </Menu>
    )
}

const LibraryImage = ({ images }) => (
    <Row className="mt-2">
        <Col span={24} className="pr-2">
            <Card
                title="Hình ảnh"
            >
                <Row >
                    {images.slice(0, 6).map((image) => (
                        <Col span={8} className="Gallery-image">
                            <img className="w-100 p-1" style={{ borderRadius: '10px' }} height="80" src={image.src} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </Col>
    </Row>
);

const Post = ({ updateData, posts }) => {
    const { username, account_id, full_name, avatar: user_avatar } = useSelector((state) => state.authentication.user_infor);
    const [commentContent, setCommentContent] = useState([])
    const likePost = async ({ post_id }) => {
        try {
            await LikePost({ post_id })
            message.success("Thích bài viết thành công!")
            updateData()
        } catch (err) {

        }
    }
    const handleInput = async ({ e, post_id }) => {
        if (e.key === 'Enter') {
            e.currentTarget.value = ''
            e.preventDefault()
            const comment = commentContent.find(comment => comment.post_id === post_id)
            if (comment.content === '') {
                return
            }
            await UserComment({ content: comment.content, post_id })
            message.success("Bình luận bài viết thành công!")
        }
        updateData()
    }
    const onChangeInput = ({ e, post_id }) => {
        if (_.findIndex(commentContent, { post_id }) < 0) {
            setCommentContent((prev) => ([...prev, { content: e.currentTarget.value, post_id }]))
            return
        }
        let newArr = commentContent
        newArr.forEach((x) => {
            if (x.post_id === post_id) {
                x.content = e.currentTarget.value
            }
        })
        setCommentContent(newArr)
    }
    return (
        <>
            {
                posts.map((post) => (
                    <Row className="mt-2 bg-white p-3">
                        <Col span={24}>
                            <Row>
                                <Col span={2}>
                                    <Avatar src={post.avatar} size="large" />
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <Link to="#">
                                        <small className="m-0"><strong>{post.full_name}</strong></small>

                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Typography className="text-justify">
                                        {post.content}
                                        {/* <Button type="link">Xem thêm</Button> */}
                                    </Typography>

                                </Col>
                            </Row>
                            <Row>
                                {post.images.map(image => (
                                    <Col span={24}>
                                        <img style={{ height: "400px", width: "100%" }} src={_.get(image, "src")} />
                                    </Col>
                                ))}
                            </Row>
                            <Row className="pb-2 border-bottom pt-2">
                                <Col>
                                    <Button className="border-0" onClick={() => likePost({ post_id: post.id })}><HeartFilled style={{ color: 'red' }} /></Button>
                                </Col>
                                <Col>
                                    {
                                        _.get(post, 'user_liked', []).slice(0, 2).map((x) => (
                                            <Avatar src={x.avatar} />
                                        ))
                                    }
                                    {
                                        _.get(post, 'user_liked', []).slice(0, 2).map((x) => (
                                            <small className="ml-2">
                                                <strong>{x.account_id === account_id ? "Bạn" : x.full_name}</strong>
                                            </small>
                                        ))
                                    }
                                    {
                                        post.user_liked.length - 2 > 0 ? (
                                            <small>
                                                {` và ${post.user_liked.length - 2} người khác đã thích bài viết này!`}
                                                {' '}
                                            </small>
                                        ) : post.user_liked.length == 0 ? '' : <small> đã thích bài viết này!</small>
                                    }
                                </Col>
                            </Row>
                            {
                                post.comments.map((comment) => (
                                    <Row className="pt-2 pb-2">
                                        <Col span={2}>
                                            <Avatar src={comment.avatar} size="default" />
                                        </Col>
                                        <Col span={22} style={{ backgroundColor: '#f0f0f0', borderRadius: '20px', fontSize: '13px' }} className="d-flex align-items-center pl-2">
                                            <Typography>
                                                <Link style={{ fontSize: '16px' }} to="#">
                                                    <small className="m-0"><strong>{comment.full_name}</strong></small>
                                                </Link>
                                                {' '}
                                                {comment.content}
                                            </Typography>
                                        </Col>
                                    </Row>
                                ))
                            }
                            <Row className="d-flex  pt-2">
                                <Col span={2}>
                                    <Avatar src={user_avatar} size="default" />
                                </Col>
                                <Col span={22}>
                                    <TextArea onChangeCapture={(e) => onChangeInput({ e, post_id: post.id })} autoSize placeholder="Nhập bình luận của bạn tại đây!" style={{ overflow: 'hidden', resize: 'none', borderRadius: '20px' }} onKeyPress={(e) => handleInput({ e, post_id: post.id })} rows={1} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))
            }

        </>
    );
};
const ProfilePage = () => {
    const [content, setContent] = useState({ status_friend: null, is_friend: false, posts: [], count_post: 0, is_self: false, images: [], full_name: "", avatar: "" })
    const { full_name, avatar } = content
    const [tab, setTab] = useState(1)
    const { posts, count_post, is_self, is_friend, status_friend } = content
    const { id } = useParams()
    const history = useHistory()

    const fetchData = async () => {
        const response = await LoadProfile({ account_id: id })
        setContent(response.data)
    }
    const handleCancleAcept = async () => {
        try {
            await CancleAcept({ user_id: id })
            refeshData()
        } catch (err) {

        }
    }
    const handleAccept = async () => {
        try {
            await AcceptFriend({ user_id: id })
            message.success("Thêm bạn thành công")
            refeshData()
        } catch (err) {
            message.error("Lỗi")
        }
    }
    const refeshData = () => {
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleAddFriend = async () => {
        await AddFriend({ user_id: id })
        refeshData()
    }
    useEffect(() => {
        if (content.is_self) {
            history.push({ pathname: "/ho-so" })
        }
    }, [content])
    return (
        <>
            <WrapperContainer>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={24} className="Background-image">
                                <Avatar style={{ height: "150px", width: "150px" }} className="Backgroung-avatar" src={avatar} />
                                <div style={{ position: "absolute", left: "25%", top: "85%" }}>
                                    <h5 className="text-white">{full_name}</h5>
                                </div>
                                {!is_self && (
                                    <>

                                        <div style={{ position: "absolute", top: "80%", left: "75%" }}>
                                            {/* <Button type="primary">{status_friend === 2 ?"Bạn bè" : status_friend === 1 ? "Đang chờ kết bạn" : "Kết bạn"}</Button>                                             */}
                                            {status_friend === 1 ?
                                                <Dropdown overlay={menuAddFriend({ handleAccept, handleCancleAcept,is_friended:false })}>
                                                    <Button type="primary">Đang chờ kết bạn</Button>
                                                </Dropdown>
                                                : status_friend === 2 ?
                                                    <Dropdown overlay={menuAddFriend({ handleAccept, handleCancleAcept, is_friended: true })}>
                                                        <Button type="primary">Bạn bè</Button>
                                                    </Dropdown>
                                                    :
                                                    <Button type="primary" onClick={() => handleAddFriend()}>Kết bạn</Button>
                                            }
                                            <Button className="ml-1" type="primary">Theo dõi</Button>
                                        </div>
                                    </>
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ height: "15vh", zIndex: "1" }} className="bg-white p-2">
                        <Menu mode="horizontal" className="w-100 text-right border-0" >
                            <Menu.Item className="text-primary" key="index" onClick={() => setTab(1)}>
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Dòng thời gian</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>&nbsp;</small>
                                    </div>
                                </div>
                            </Menu.Item>
                            <Menu.Item className="text-primary" key="friend">
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Bạn bè</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>12</small>
                                    </div>
                                </div>
                            </Menu.Item>
                            <Menu.Item className="text-primary" key="images">
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Đánh giá</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>{count_post}</small>
                                    </div>
                                </div>
                            </Menu.Item>
                            <Menu.Item className="text-primary" key="review" onClick={() => setTab(3)}>
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Hình ảnh</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>{0}</small>
                                    </div>
                                </div>
                            </Menu.Item>
                            <Menu.Item className="text-primary" key="follower">
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Người theo dõi</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>12</small>
                                    </div>
                                </div>
                            </Menu.Item>
                            <Menu.Item className="text-primary" key="following">
                                <div className="d-flex flex-column  align-items-center">
                                    <div style={{ height: "30px", fontSize: "18px" }}>Đang theo dõi</div>
                                    <div>
                                        <small style={{ fontWeight: "700", fontSize: "14px" }}>12</small>
                                    </div>
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                {tab === 1 && (
                    <div className="Index-tab">

                        <Row>
                            <Col span={6}>
                                <LibraryImage images={content.images} />
                            </Col>
                            <Col span={13}>
                                <Post posts={posts} />
                            </Col>
                            <Col span={5}>

                            </Col>
                        </Row>
                    </div>
                )}
                {/* Image library tab */}
                {tab === 3 && (
                    <div className="Library-tab" >
                        <Row className="bg-white pl-1 pr-1" >
                            {content.images.map(image => (
                                <Col span={6} >
                                    <img className="w-100 p-1" style={{ borderRadius: '10px' }} height="200" src={image.src} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </WrapperContainer>
        </>
    )
}

export default ProfilePage