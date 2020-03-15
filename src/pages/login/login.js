import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Carousel, Form, Button } from 'react-bootstrap'
import { Dialog, DialogTitle } from '@material-ui/core'
import * as _ from 'lodash'
import "./login.css"
import { register } from '../../api/account'
import SimpleBackdrop from '../../components/backdrop'
import { connect } from 'react-redux';
import { actionLogin } from '../../actions/login';

import { compose } from 'redux'

import { withRouter,Link } from 'react-router-dom'


function Modal(props) {
    const { show, content } = props
    return (
        <Dialog open={show} className="Dialog" onClose={() => props.close()}>
            <DialogTitle>{content}</DialogTitle>
        </Dialog>
    )
}


function Login(props) {
    const [showLoginForm, setShowLoginForm] = useState(true)
    const [usernameFormReg, setUsernameFormReg] = useState('')
    const [passwordFormReg, setPasswordFormReg] = useState('')
    const [usernameFormLogin, setUsernameFormLogin] = useState('')
    const [passwordFormLogin, setPasswordFormLogin] = useState('')
    const [emailFormReg, setEmailFormReg] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [contentDialog, setContentDialog] = useState('')


    const handleLogin = (e) => {
        e.preventDefault()        
        props.actionLogin({ username: usernameFormLogin, password: passwordFormLogin })
    }
    const handleRegister = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setLoading(true)
        const form = { username: usernameFormReg, password: passwordFormReg, email: emailFormReg }
        if (_.isEmpty(usernameFormReg) || _.isEmpty(passwordFormReg) || _.isEmpty(emailFormReg)) {
            setShowModal(true)
            setContentDialog("Vui lòng nhập đầy đủ thông tin!")
            setLoading(false)
            return
        }
        register(form).then(result => {
            const { message } = result.data
            if (result.data.code === 103) {
                setLoading(false)
                setTimeout(() => {
                    setContentDialog("Đăng ký thành công!")
                    setShowModal(true)
                }, 500)
                return
            }
            if (result.data.code === 102) {
                setLoading(false)
                setTimeout(() => {
                    setContentDialog("Tài khoản hoặc email đã tồn tại!")
                    setShowModal(true)
                }, 500)
                return
            }
            if (result.data.code === 101) {
                setLoading(false)
                setTimeout(() => {
                    setContentDialog(message)
                    setShowModal(true)
                }, 500)
                return
            }
        })
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleInputRegister = (e, value) => {
        switch (value) {
            case "username":
                setUsernameFormReg(e.currentTarget.value)
                break
            case "password":
                setPasswordFormReg(e.currentTarget.value)
                break
            case "email":
                setEmailFormReg(e.currentTarget.value)
                break;
            default:

        }
    }

    //    
    useEffect(() => {
        const isLoading = props.loginState.isLoading
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [props.loginState.isLoading])
    return (
        <div className="Login">            
            <Row>
                <Col lg="7" md="auto" className="left-side" style={{ padding: 0 }}>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Image style={{ height: "100vh" }} src="https://znews-photo.zadn.vn/Uploaded/lerl/2018_08_21/01440146HDR.jpg" />
                            <Carousel.Caption>
                                <h3>Biển Cửa Đại, Hội An</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image style={{ height: "100vh" }} src="https://znews-photo.zadn.vn/w860/Uploaded/lerl/2018_08_21/00870088HDR.jpg" />
                            <Carousel.Caption>
                                <h3>Phan Rang</h3>
                                <p>Miền đất khô cằn nắng gió mà vẫn duyên dáng, quyến rũ với các nét đẹp hoang sơ.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image style={{ height: "100vh" }} src="https://znews-photo.zadn.vn/Uploaded/lerl/2018_08_21/00730075HDR_1.jpg" />
                            <Carousel.Caption>
                                <h3>An Giang - Tà Pạ</h3>
                                <p>Vẻ đẹp bất tận của cánh đồng, với màu xanh mướt của lúa khi còn non, màu vàng nhạt của lúa vừa trổ bông, màu vàng tươi rạng rỡ của lúa sắp vào mùa gặt và màu vàng đậm trĩu hạt của cánh đồng khi vào mùa thu hoạch.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image style={{ height: "100vh" }} src="https://znews-photo.zadn.vn/Uploaded/lerl/2018_08_21/0249.jpg" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image style={{ height: "100vh" }} src="https://znews-photo.zadn.vn/w860/Uploaded/lerl/2018_08_21/04460448HDR1_1.JPG" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                {
                    showLoginForm ?
                        <Col>
                            <div className="form-login" style={{ width: "350px", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -70%)" }}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Đăng nhập tài khoản</Form.Label>
                                        <Form.Control onChange={(e) => setUsernameFormLogin(e.currentTarget.value)} type="text" placeholder="Tài khoản" />
                                        <Form.Control onChange={(e) => setPasswordFormLogin(e.currentTarget.value)} style={{ marginTop: "20px" }} type="password" placeholder="Mật khẩu" />
                                    </Form.Group>
                                    <div className="d-flex justify-content-end mb-2">
                                        <a  onClick={() => setShowLoginForm(false)} >Đăng ký tài khoản</a>
                                    </div>
                                    <Button onClick={handleLogin} style={{ width: "100%" }} variant="primary" type="submit">
                                        Đăng nhập
                            </Button>
                                </Form>
                            </div>
                        </Col>
                        :
                        <Col>
                            <div className="form-login" style={{ width: "350px", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -70%)" }}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Đăng ký tài khoản</Form.Label>
                                        <Form.Control onChange={(e) => handleInputRegister(e, 'username')} type="text" placeholder="Tài khoản" />
                                        <Form.Control onChange={(e) => handleInputRegister(e, 'password')} style={{ marginTop: "20px" }} type="password" placeholder="Mật khẩu" />

                                        <Form.Control onChange={(e) => handleInputRegister(e, 'email')} style={{ marginTop: "20px" }} type="text" placeholder="Email khoản" />
                                    </Form.Group>
                                    <div className="d-flex justify-content-end mb-2">
                                        <a onClick={() => setShowLoginForm(true)} >Bạn đã có tài khoản?</a>
                                    </div>
                                    <Button onClick={handleRegister} style={{ width: "100%" }} variant="primary" type="submit">
                                        Đăng ký
                                    </Button>
                                </Form>
                            </div>
                        </Col>

                }
            </Row>
            <Modal show={showModal} close={handleCloseModal} content={contentDialog} />
            <SimpleBackdrop open={isLoading} />
        </div>
    )
}
const mapStateToProps = state => ({ loginState: state.loginReducer })
const mapDispatchToProps = dispatch => {
    return {
        actionLogin(payload) {
            return dispatch(actionLogin(payload))
        }
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login)
