/* eslint-disable */
import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import {
    Row, Col, Rate, Typography, Avatar, Button, Tooltip, Card, message,
} from 'antd';
import GoogleMapReact from 'google-map-react';
import TextArea from 'antd/lib/input/TextArea';
import './style.scss';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GetPlaceByID, UserReview } from '../../services/places';
import SimpleMap from './simple';
import { CameraOutlined, HeartFilled } from "@ant-design/icons"
import { LikePost, UserComment } from '../../services/post';

const WrapperContainer = styled.div`  
    padding : 0 5% 0 5%;  
    height : 100%;

`;

const { Title } = Typography;
const LibraryImage = ({ images }) => (
    <Row>
        <Col span={24}>
            <Card
                title="Hình ảnh"
            >
                <Row >
                    {images.map((image) => (
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
    const { username, full_name, account_id, avatar: user_avatar } = useSelector((state) => state.authentication.user_infor);
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
const ReviewArea = ({ updateData }) => {
    const { id } = useParams();
    const imgRef = useRef()
    const refFile = useRef(null)
    const [formReview, setFormReview] = useState({ content: '', post_id: parseInt(id), rating: 0 });
    const { username, full_name, avatar: user_avatar } = useSelector((state) => state.authentication.user_infor);
    const [files, setFiles] = useState(null)
    const userReview = async () => {
        try {
            let formData = new FormData()
            formData.append("content", formReview.content)
            formData.append("rating", formReview.rating)
            formData.append("post_id", id)
            formData.append("file", files)
            await UserReview(formData);
            setFormReview({ content: '', rating: 0, ...formReview });
            message.success('Đánh giá địa điểm thành công');
            updateData();
            setFormReview({ content: '', post_id: parseInt(id), rating: 0 });
            setFiles(null)
        } catch (err) {
            message.error('Xảy ra lỗi');
        }
    };
    const handleChange = (e) => {
        setFormReview({ content: e.currentTarget.value, rating: formReview.rating, post_id: formReview.post_id });
    };
    const handleChangeRate = (value) => {
        setFormReview({ content: formReview.content, rating: value, post_id: formReview.post_id });
    };
    useMemo(() => {
        if (files === null) {
            return
        }
        const rd = new FileReader()
        rd.readAsDataURL(files)
        rd.onloadend = function (e) {
            imgRef.current.src = e.target.result
        }
    }, [files])
    return (
        <Row className="bg-white">
            <Col span={2} className="pl-2 pt-4">
                <Avatar size="large" src={user_avatar} />
            </Col>
            <Col span={18} className="d-flex flex-column pl-2 pt-4 pb-4">
                <TextArea placeholder="Nhập đánh giá của bạn tại đây!" value={formReview.content} onChange={handleChange} style={{ resize: 'none' }} rows={4} />
                <Rate allowHalf defaultValue={formReview.rating} onChange={handleChangeRate} />
                <Button className="ml-auto" type="primary" onClick={() => userReview()}>Đánh giá</Button>
                <Row>
                    <Col span={4}>
                        {files !== null && (
                            <img height="150" width="150" src="" ref={imgRef} />

                        )}
                    </Col>
                </Row>
            </Col>
            <Col span={3} className="pt-4">
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <Tooltip title="Đính kèm hình ảnh" style={{ color: 'orange' }}>
                            <Button className="border-0" type="ghost" onClick={() => refFile.current.click()}>
                                <CameraOutlined style={{ fontSize: '20px' }} />
                                <input type="file" onChange={(e) => setFiles(e.target.files[0])} ref={refFile} style={{ display: 'none' }} />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

const DetailPlace = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({
        coordinate: {},
        id: '', name: '', rating: 0, images: [], description: '', posts: [], background_image: [],
    });
    const { id } = useParams();
    const fetchContent = async () => {
        const response = await GetPlaceByID({ id });
        setContent(response.data.content);
        console.log(response.data)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    };
    useEffect(() => {
        fetchContent();
    }, []);
    const updateData = () => {
        fetchContent();
    };
    return (
        <>
            <WrapperContainer>
                <Row>
                    <Col className="Landing-image d-flex flex-column align-items-center justify-content-center" span={24} style={{ height: '300px', background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${_.get(content, 'background_image[0].src', '')}) 100% 100% / 100% 100% no-repeat ` }}>
                        <div className="d-flex mt-auto">
                            <h2 className="text-white">{content.name}</h2>
                        </div>
                        <div className="d-flex b-0 mt-auto mb-2 flex-column">
                            <div>
                                <small className="text-white">
                                    {content.rating}
                                    {' '}
                        / 5 (27) đánh giá
                        </small>
                            </div>
                            <div>
                                <Rate disabled defaultValue={content.rating} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between mt-3">
                    <Col span={6}>
                        <SimpleMap lat={content.coordinate.lat} lng={content.coordinate.lng} />
                        <LibraryImage images={content.images} />
                    </Col>
                    <Col span={12}>
                        <ReviewArea updateData={updateData} />
                        <Post posts={content.posts} updateData={updateData} />
                    </Col>
                    <Col span={5} />
                </Row>
            </WrapperContainer>
        </>
    );
};

export default DetailPlace;
