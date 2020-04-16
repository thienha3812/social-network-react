import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import queryString from "query-string";
import {
  loaddingProfileService,
  friendRequestService,
  acceptFriendRequest
} from "../../services/user.service";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

function Profile(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [statusFriend, setStatusFriend] = React.useState("");
  const prevOpen = React.useRef(open);
  let self_request = null;

  /// Handle function
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = async (event, type) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    const { id } = queryString.parse(props.location.search);

    if (type === "ACCEPT") {
      const request = await acceptFriendRequest({ id });
      if (request.data.success) {
        setStatusFriend("Bạn bè");
      }
    }
  };
  const addFriend = async () => {
    const { id } = queryString.parse(props.location.search);
    if (statusFriend == "Thêm bạn bè") {
      setStatusFriend("Huỷ lời mời");     
    }
    if (statusFriend == "Huỷ lời mời") {
      setStatusFriend("Thêm bạn bè");
    }
    await friendRequestService({ id: id });
  };

  // Update state
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  //
  const [profile, setProfile] = React.useState({
    avatar: "",
    full_name: "",
    live_in: ""
  });
  React.useState(() => {
    const fetchDataUser = async () => {
      const { id } = queryString.parse(props.location.search);
      const response = await loaddingProfileService({ id });
      const { full_name, avatar, live_in } = response.data.profile;
      self_request = response.data.self_request;
      console.log(self_request);
      setStatusFriend(response.data.request_status);
      setProfile({
        avatar,
        full_name,
        live_in
      });
    };
    fetchDataUser();
  }, []);

  return (
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-body profile-page p-0">
                <div className="profile-header">
                  <div className="cover-container">
                    <img
                      src="images/page-img/profile-bg1.jpg"
                      alt="profile-bg"
                      className="rounded img-fluid"
                    />
                    <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                      <li>
                        <Button
                          ref={anchorRef}
                          size="small"
                          aria-controls={open ? "menu-list-grow" : undefined}
                          aria-haspopup="true"
                          style={{ color: "#1876F2", zIndex: 9999 }}
                          variant="contained"
                          startIcon={<PersonAddIcon />}
                          onClick={handleToggle}
                          className="mr-2"
                          onClick={
                            statusFriend == "Đang chờ kết bạn"
                              ? handleToggle
                              : addFriend
                          }
                        >
                          {statusFriend}
                        </Button>
                        <Popper
                          open={open}
                          style={{ zIndex: 10000, width: "300px" }}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === "bottom"
                                    ? "center top"
                                    : "center bottom"
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                  >
                                    {self_request == false && (
                                      <MenuItem
                                        onClick={e => handleClose(e, "ACCEPT")}
                                      >
                                        Xác nhận{" "}
                                      </MenuItem>
                                    )}
                                    <MenuItem
                                      onClick={e => handleClose(e, "DELETE")}
                                    >
                                      Xoá lời mời
                                    </MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </li>
                    </ul>
                  </div>
                  <div className="user-detail text-center mb-3">
                    <div className="profile-img">
                      <img
                        src={profile.avatar}
                        alt="profile-img"
                        className="img-fluid"
                        style={{ height: "150px", width: "150px" }}
                      />
                    </div>
                    <div className="profile-detail">
                      <h3 className>{profile.full_name}</h3>
                    </div>
                  </div>
                  <div className="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                    <div className="social-links">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/08.png"
                              className="img-fluid rounded"
                              alt="facebook"
                            />
                          </a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/09.png"
                              className="img-fluid rounded"
                              alt="Twitter"
                            />
                          </a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/10.png"
                              className="img-fluid rounded"
                              alt="Instagram"
                            />
                          </a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/11.png"
                              className="img-fluid rounded"
                              alt="Google plus"
                            />
                          </a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/12.png"
                              className="img-fluid rounded"
                              alt="You tube"
                            />
                          </a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#">
                            <img
                              src="images/icon/13.png"
                              className="img-fluid rounded"
                              alt="linkedin"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-info">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pl-3">
                          <h6>Posts</h6>
                          <p className="mb-0">690</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Followers</h6>
                          <p className="mb-0">206</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Following</h6>
                          <p className="mb-0">100</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-body p-0">
                <div className="user-tabing">
                  <ul className="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                    <li className="col-sm-3 p-0">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#timeline"
                      >
                        Timeline
                      </a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a className="nav-link" data-toggle="pill" href="#about">
                        About
                      </a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#friends"
                      >
                        friends
                      </a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a className="nav-link" data-toggle="pill" href="#photos">
                        Photos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  state
});

export default compose(withRouter, connect(mapStateToProps, null))(Profile);
