/* eslint-disable */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { signinAction } from '../../actions/authentication';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: 'admin1234', password: 'admin1234' });
  const history = useHistory();
  const { username, password } = form;
  const handleLogin = async () => {
    const response = await dispatch(signinAction({ username, password }));
    if (get(response, 'payload.success')) {
      history.push({ pathname: '/du-lich' });
    }
  };
  return (
    <>
      <section className="sign-in-page">
        <div id="container-inside">
          <div id="circle-small" />
          <div id="circle-medium" />
          <div id="circle-large" />
          <div id="circle-xlarge" />
          <div id="circle-xxlarge" />
        </div>
        <div className="container p-0">
          <div className="row no-gutters">
            <div className="col-md-6 text-center pt-5">
              <div className="sign-in-detail text-white" />
            </div>
            <div className="col-md-6 bg-white pt-5">
              <div className="sign-in-from">
                <h1 className="mb-0">Đăng nhập</h1>
                <p>Nhập tài khoản và mật khẩu của bạn để tiến hành đăng nhập.</p>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tài khoản</label>
                  <input type="email" className="form-control mb-0" onChange={(e) => setForm({ username: e.currentTarget.value, password })} id="exampleInputEmail1" placeholder="Nhập tài khoản" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                  <a href="#" className="float-right">Quên mật khẩu?</a>
                  <input type="password" value={get(form, 'password')} className="form-control mb-0" onChange={(e) => setForm({ username, password: e.currentTarget.value })} id="exampleInputPassword1" placeholder="Nhập mật khẩu" />
                </div>
                <div className="d-inline-block w-100">
                  <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Ghi nhớ tài khoản</label>
                  </div>
                  <button className="btn btn-primary float-right" type="button" onClick={() => handleLogin()}>Đăng nhập</button>
                </div>
                <div className="sign-info">
                  <span className="dark-color d-inline-block line-height-2">
                    Bạn chưa có tài khoản?
                    <Link to="/signup">Đăng ký</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
