import React, { useState, useEffect } from 'react';
import { Image, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import Hidden from '@material-ui/core/Hidden'
//
import SimpleBackdrop from '../../components/backdrop'
//
import Map from '../../components/map'
import Friends from '../friends/friends';
function RenderListPost() {
    return (
        <div className="Post w-100 pl-3 pr-3" style={{ overflowX: "scroll" }}>
            <Row className="mt-2 bg-white pt-2 pl-2" style={{ border: "1px solid #3333", borderRadius: "3px" }}>
                <Col>
                    <Row>
                        <Col xs="auto" md="1" className="pl-2">
                            <Image roundedCircle style={{ width: "40px", height: "40px" }} src="https://i.pinimg.com/736x/33/ae/4c/33ae4c4e7fbb7532d6f51d49f97dc268.jpg" />
                        </Col>
                        <Col xs="auto" className="p-0 mt-1 d-flex flex-column align-items-start" md="2">
                            <div>
                                <h6 className="aton" style={{ fontWeight: "700", color: "black" }}>Nene</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pr-1 pb-2 pl-2">
                        <Col md="12" className="content-post text-start ">
                            <p>
                                123
                            </p>
                        </Col>
                        <Col md="12">
                            <FaHeart style={{ color: "red", fontSize: "20px" }} />
                            <small className="ml-1">12</small>
                            <FiMessageSquare className="ml-2 mt-1" style={{ color: "#a7a7a7", fontSize: "22px" }} />
                            <small className="ml-1">12</small>
                        </Col>
                        <Col md="12" style={{ border: "1px solid #e6e6e6", borderRadius: "5px" }} className="pt-1">
                            <InputGroup >
                                <FormControl
                                    placeholder="Viết bình luận..."
                                    aria-label="Recipient's username"
                                    as="textarea"
                                    aria-describedby="basic-addon2"
                                    style={{ height: "40px", resize: "none", outline: "none", border: "none", boxShadow: "none" }}
                                />
                                <InputGroup.Append>
                                    <MdSend className="mt-auto mb-auto" />
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
function NewFeed() {
    const [showListTool, setShowListTool] = useState(true)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    return (
        <div className="NewsFeed" style={{ bottom: "0", height: "92%", position: "fixed", overflowX: "hidden", overflowY: "scroll", width: "100%" }}>
            <Row>
                <Hidden xsDown>
                    <Col xs="3" md="3">
                        <Map />
                    </Col>
                </Hidden>
                <Col xs="8" md="6" >
                    <Row className="d-flex  justify-content-around"  >
                        <Col xs="12" >
                            <Row style={{ backgroundColor: "white" }} >
                                <Col>
                                    <Row>
                                        <Col lg="6" className="p-0 border-right" >
                                            <Button variant="contained" style={{backgroundColor:"#f7347a",color:"white", borderRadius: "0", width: "100%" }}>
                                                <Image className="mb-1 ml-1" style={{ height: "14px", width: "13px" }} src="/edit.png" />                                                
                                                Đăng bài viết
                                    </Button>

                                        </Col>
                                        <Col lg="6" className="p-0" >
                                            <Button variant="contained"   style={{ backgroundColor:"#f7347a",color:"white",borderRadius: "0", width: "100%" }}>
                                                <Image className="mb-1 ml-1" style={{ height: "15px", width: "15px" }} src="/geo.png" />
                                                Đánh giá địa điểm
                                    </Button>
                                        </Col>
                                        <Col lg="12" className="pl-2 border p-1"  >
                                            <InputGroup className="mb-2 mt-2 pl-3">
                                                <InputGroup.Prepend style={{ backgroundColor: "white", width: "70px" }}>
                                                    <Image roundedCircle style={{ width: "40px", height: "40px" }} src="https://i.pinimg.com/736x/33/ae/4c/33ae4c4e7fbb7532d6f51d49f97dc268.jpg" />
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    style={{ resize: "none", outline: "none", border: "none", boxShadow: "none" }}
                                                    as="textarea"
                                                    onFocus={() => setShowListTool(true)}
                                                    placeholder="Chia sẻ trạng thái của bạn đến mọi người ngay nào !"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            {showListTool &&
                                                <Row className="d-flex justify-content-around pl-3">
                                                    <Col xs="6" className="p-2 d-flex justify-content-start">
                                                        <Button onClick={() => setShowListTool(true)} variant="light" >
                                                            <Image src="/files-and-folders.png" className="mr-1" style={{ width: "15px", height: '15px' }} />                                                            
                                                            {window.outerWidth > 480 && <small style={{ fontWeight: 500 }}>Hình ảnh/Video</small>}
                                                        </Button>
                                                        <Button variant="light" className="ml-1">
                                                            <Image src="/broadcast.png" className="mr-1" style={{ width: "15px", height: '15px' }} />
                                                            {window.outerWidth > 480 && <small style={{ fontWeight: 500 }}>Trực tiếp video</small>}
                                                        </Button>
                                                    </Col>
                                                    <Col xs="5" className="p-2 d-flex justify-content-end">
                                                        <Button onClick={() => setShowListTool(true)} variant="warning" >
                                                            <small style={{ fontWeight: 500 }} className="text-white">Đăng bài viết</small>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* Bài viết */}
                            <Row>
                                <RenderListPost />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Hidden xsDown>
                    <Col xs="3" md="3" >
                        <Friends />
                    </Col>
                </Hidden>
            </Row>
            <SimpleBackdrop open={isLoading} />
        </div>
    )
}
export default NewFeed
