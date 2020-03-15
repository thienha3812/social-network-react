import React, { useState, useEffect } from 'react';
import { Image, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs'
import Hidden from '@material-ui/core/Hidden';
import './style.scss'



function Profile() {
    return (
        <div style={{ marginTop: "4em" }} >
            <Row style={{ height: "100vh !important", backgroundColor: "#f3f3f3" }} className={window.outerWidth <= 480 ? "pl-2 pr-2" : ""}>
                <Col md="12">
                    <Row className="d-flex justify-content-between">
                        <Col md="8" xs="12" >
                            <Row className="bg-white">
                                <Col style={{ height: "fit-content" }} className="p-0  rounded border pt-auto pb-auto" >
                                    <Image className="banner_"  src="https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg" />
                                    <Image className="img_avatar" roundedCircle src="https://i.pinimg.com/736x/33/ae/4c/33ae4c4e7fbb7532d6f51d49f97dc268.jpg" />
                                    <div className="menu-item d-flex w-60 float-right mr-4 mt-3 mb-3  flex-row justify-content-center">
                                        <div className="d-flex">
                                            <div style={{ borderRight: "2px solid #e6e6e6" }} className="pr-2 d-flex flex-column align-items-center ml-1 ">
                                                <div><h6 className="text-primary" style={{ fontFamily: "Ubuntu sans-serif" }}>Theo dõi</h6></div>
                                                <small>363 người</small>
                                            </div>
                                            <div style={{ borderRight: "2px solid #e6e6e6" }} className="pr-2 d-flex flex-column align-items-center ml-1 ">
                                                <div><h6 className="text-primary" style={{ fontFamily: "Ubuntu sans-serif" }}>Bạn bè</h6></div>
                                                <small>363 người</small>
                                            </div>
                                            <div style={{ borderRight: "2px solid #e6e6e6" }} className="pr-2 d-flex flex-column align-items-center ml-1 ">
                                                <div><h6 className="text-primary" style={{ fontFamily: "Ubuntu sans-serif" }}>Khám phá</h6></div>
                                                <small>363 địa điểm</small>
                                            </div>
                                            <div className="pr-2 d-flex flex-column align-items-center ml-1 ">
                                                <div><h6 className="text-primary" style={{ fontFamily: "Ubuntu sans-serif" }}>Bài viết</h6></div>
                                                <small>363 bài viết</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-3 d-flex justify-content-between">
                                <Col md="3">
                                </Col>
                                <Col md="8">
                                    <Row >
                                        <Col className="border rounded bg-white text-center">
                                            <small style={{ fontSize: "16px", fontWeight: "500", color: "#3097FF" }}>Danh sách bài viết</small>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 bg-white rounded border pt-2 pb-2">
                                        <Col>
                                            <Row>
                                                <Col md="auto" xs="auto" className="pl-2">
                                                    <Image roundedCircle style={{ width: "40px", height: "40px" }} src="https://i.pinimg.com/736x/33/ae/4c/33ae4c4e7fbb7532d6f51d49f97dc268.jpg" />
                                                </Col>
                                                <Col md="auto" xs="auto" className="pl-1">
                                                    <Row>
                                                        <small className="aton" style={{ fontSize: '16px', fontWeight: "600" }}>Nene &nbsp;</small>
                                                        <div> tại Tháp chàm</div>
                                                    </Row>
                                                    <Row>
                                                        <small className="aton" style={{ fontSize: '12px' }}>16 phút trước</small>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>Chào ngày mới nào :3</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Image style={{ width: "100%" }} src="https://4.bp.blogspot.com/-Rl8oNheKV9o/WcEPPIGW54I/AAAAAAAArCs/1I2zDtBUTrcIeKS6C1cUVOtfzHDU1xsTACLcBGAs/s1600/Nature-Wallpaper-Posted-in-HD-%25C2%25B7-HD-Wallpaper-Nature.jpg" />
                                                </Col>
                                            </Row>
                                            <Row>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Hidden xsDown smDown>
                            <Col md="3" xs="auto" className="bg-white">
                                <Row>
                                    <Col className="bg-white">
                                        <div> 123</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Hidden>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Profile
