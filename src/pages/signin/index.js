import React from 'react';


function Signin() {
  return (
    <div className="SigninPage">
      <div>
        {/* loader Start */}
        {/* <div id="loading">
          <div id="loading-center">
          </div>
        </div> */}
        {/* loader END */}
        {/* Sign in Start */}
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
                <div className="sign-in-detail text-white">
                  <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items={1} data-items-laptop={1} data-items-tab={1} data-items-mobile={1} data-items-mobile-sm={1} data-margin={0}>
                    <div className="item">
                      <img src="images/login/1.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Find new friends</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div className="item">
                      <img src="images/login/2.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Connect with the world</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div className="item">
                      <img src="images/login/3.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Create new events</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-white pt-5">
                <div className="sign-in-from">
                  <h1 className="mb-0">Đăng nhập</h1>
                  <p>Vui lòng nhập tài khoản và mật khẩu để đăng nhập.</p>
                  <form className="mt-4">
                    <div className="form-group">
                      <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Nhập tài khoản" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Nhập mật  khẩu" />
                    </div>
                    <div className="d-inline-block w-100">
                      <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Ghi nhớ tài khoản</label>
                      </div>
                      <button type="submit" className="btn btn-primary float-right">Đăng nhập</button>
                    </div>
                    <div>
                      <a href="#" className="float-right">Quên mật khẩu?</a>
                    </div>
                    <div className="sign-info">
                      <span className="dark-color d-inline-block line-height-2">
                        Bạn chưa có tài khoản?
                        {' '}
                        <a href="/dangky">Đăng ký</a>
                      </span>
                      <ul className="iq-social-media">
                        <li><a href="#"><i className="ri-facebook-box-line" /></a></li>
                        <li><a href="#"><i className="ri-twitter-line" /></a></li>
                        <li><a href="#"><i className="ri-instagram-line" /></a></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sign in END */}
      </div>
    </div>
  );
}

export default Signin;
