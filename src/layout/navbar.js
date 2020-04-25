/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import {
  loadRequestService,
  acceptFriendRequest,
} from "../services/user.service";
import { handleLogout } from "../pages/signin/actions";
import Popover from "@material-ui/core/Popover";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function Navbar(props) {
  const refNavBarList = React.useRef();
  const refFriendRequest = React.useRef();
  const [list, setList] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const request = await loadRequestService();
      if (request.data.list_request !== null) {
        setList([...list, ...request.data.list_request]);
      }
    };
    fetchData();
  }, []);
  const openNavbarList = () => {
    if (refNavBarList.current.classList.contains("iq-show")) {
      refNavBarList.current.classList.remove("iq-show");
    } else {
      refNavBarList.current.classList.add("iq-show");
    }
  };
  const acceptFriend = async (id, indexInArray) => {
    const request = await acceptFriendRequest({ id });
    if (request.data.success) {
      let currentList =
        list.slice(0, indexInArray) + list.slice(indexInArray + 1);
      setList([...currentList]);
    }
  };
  const closeNavbarList = () => {
    refNavBarList.current.classList.remove("iq-show");
  };
  const openFriendRequest = () => {
    if (refFriendRequest.current.classList.contains("iq-show")) {
      refFriendRequest.current.classList.remove("iq-show");
    } else {
      refFriendRequest.current.classList.add("iq-show");
    }
  };
  const closeFriendRequest = () => {
    refFriendRequest.current.classList.remove("iq-show");
  };
  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-navbar-logo d-flex justify-content-between">
            <a href="/bangtin"></a>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="ri-menu-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="iq-search-bar">
            <form action="#" className="searchbox">
              <input
                type="text"
                className="text search-input"
                placeholder="Type here to search..."
              />
              <a className="search-link" href="#">
                <i className="ri-search-line" />
              </a>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-3-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-list">
              <li>
                <a
                  href="#"
                  className="iq-waves-effect d-flex align-items-center"
                >
                  <img
                    src={props.state.signinReducer.avatar}
                    className="img-fluid rounded-circle mr-3"
                    alt="user"
                  />
                  <div className="caption">
                    <h6 className="mb-0 line-height">
                      {props.state.signinReducer.full_name}
                    </h6>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/bangtin"
                  className="iq-waves-effect d-flex align-items-center"
                >
                  <i className="ri-home-line" />
                </a>
              </li>
              <ClickAwayListener onClickAway={closeFriendRequest}>
                <li className="nav-item " ref={refFriendRequest}>
                  <a
                    className="search-toggle iq-waves-effect"
                    onClick={openFriendRequest}
                    href="javascript:void(0)"
                  >
                    <i className="ri-group-line" />
                  </a>
                  <div className="iq-sub-dropdown iq-sub-dropdown-large">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white">
                            Kết bạn
                            <small className="badge  badge-light float-right pt-1">
                              {list.length}
                            </small>
                          </h5>
                        </div>

                        {list.length != 0 ? (
                          list.map((x, i) => (
                            <>
                              <div className="iq-friend-request">
                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <div className>
                                      <img
                                        className="avatar-40 rounded"
                                        src={x.avatar}
                                        alt=""
                                      />
                                    </div>
                                    <div className=" ml-3">
                                      <a
                                        href={"/nguoidung?id=" + x.id}
                                        className="mb-0 "
                                      >
                                        {x.full_name}
                                      </a>
                                      <p className="mb-0">40 friends</p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <button
                                      onClick={() => acceptFriend(x.id, i)}
                                      className="mr-3 btn btn-primary rounded"
                                    >
                                      Xác nhận
                                    </button>
                                    <a
                                      href="javascript:void();"
                                      className="mr-3 btn btn-secondary rounded"
                                    >
                                      Huỷ
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))
                        ) : (
                          <div className="text-center">
                            Bạn chưa có lời mời kết bạn nào!
                          </div>
                        )}
                        <div className="text-center">
                          <a href="#" className="mr-3 btn text-primary">
                            Xem thêm
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ClickAwayListener>
              <li className="nav-item">
                <IconButton style={{ color: "rgb(80, 181, 255)" }}>
                  <NotificationsOutlinedIcon />
                </IconButton>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white">
                          All Notifications
                          <small className="badge  badge-light float-right pt-1">
                            4
                          </small>
                        </h5>
                      </div>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/01.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Emma Watson Bni</h6>
                            <small className="float-right font-size-12">
                              Just Now
                            </small>
                            <p className="mb-0">95 MB</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/02.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">New customer is join</h6>
                            <small className="float-right font-size-12">
                              5 days ago
                            </small>
                            <p className="mb-0">Cyst Bni</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/03.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Two customer is left</h6>
                            <small className="float-right font-size-12">
                              2 days ago
                            </small>
                            <p className="mb-0">Cyst Bni</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/04.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                            <small className="float-right font-size-12">
                              3 days ago
                            </small>
                            <p className="mb-0">Cyst Bni</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <IconButton style={{ color: "#50b5ff" }}>
                  <MailOutlineOutlinedIcon />
                </IconButton>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white">
                          All Messages
                          <small className="badge  badge-light float-right pt-1">
                            5
                          </small>
                        </h5>
                      </div>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/01.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Bni Emma Watson</h6>
                            <small className="float-left font-size-12">
                              13 Jun
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/02.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                            <small className="float-left font-size-12">
                              20 Apr
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/03.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Why do we use it?</h6>
                            <small className="float-left font-size-12">
                              30 Jun
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/04.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Variations Passages</h6>
                            <small className="float-left font-size-12">
                              12 Sep
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/05.jpg"
                              alt=""
                            />
                          </div>
                          <div className=" ml-3">
                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                            <small className="float-left font-size-12">
                              5 Dec
                            </small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-list">
              <ClickAwayListener onClickAway={closeNavbarList}>
                <li ref={refNavBarList}>
                  <IconButton
                    aria-label="delete"
                    onClick={openNavbarList}
                    style={{ color: "#50b5ff" }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                  <div className="iq-sub-dropdown iq-user-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3 line-height">
                          <h5 className="mb-0 text-white line-height">
                            Hello Bni Cyst
                          </h5>
                          <span className="text-white font-size-12">
                            Available
                          </span>
                        </div>
                        <a
                          href="profile.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-primary">
                              <i className="ri-file-user-line" />
                            </div>
                            <div className=" ml-3">
                              <h6 className="mb-0 ">My Profile</h6>
                              <p className="mb-0 font-size-12">
                                View personal profile details.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="profile-edit.html"
                          className="iq-sub-card iq-bg-warning-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-warning">
                              <i className="ri-profile-line" />
                            </div>
                            <div className=" ml-3">
                              <h6 className="mb-0 ">Edit Profile</h6>
                              <p className="mb-0 font-size-12">
                                Modify your personal details.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="account-setting.html"
                          className="iq-sub-card iq-bg-info-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-info">
                              <i className="ri-account-box-line" />
                            </div>
                            <div className=" ml-3">
                              <h6 className="mb-0 ">Account settings</h6>
                              <p className="mb-0 font-size-12">
                                Manage your account parameters.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="privacy-setting.html"
                          className="iq-sub-card iq-bg-danger-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-danger">
                              <i className="ri-lock-line" />
                            </div>
                            <div className="ml-3">
                              <h6 className="mb-0 ">Privacy Settings</h6>
                              <p className="mb-0 font-size-12">
                                Control your privacy parameters.
                              </p>
                            </div>
                          </div>
                        </a>
                        <div className="d-inline-block w-100 text-center p-3">
                          <a
                            className="bg-primary iq-sign-btn text-white"
                            href="javascript:void(0)"
                            onClick={() => props.handleLogout()}
                            role="button"
                          >
                            Đăng xuất
                            <i className="ri-login-box-line ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ClickAwayListener>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { handleLogout })(Navbar);
