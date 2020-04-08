import React from 'react';
import './sidebar';

function Sidebar() {
  const ref = React.useRef(null);
  const handleOpen = () => {
    document.body.classList.add('sidebar-main');
  };
  const handleClose = () => {
    document.body.classList.remove('sidebar-main');
  };
  return (
    <>
      <div className="iq-sidebar" ref={ref} onMouseOver={handleOpen} onMouseLeave={handleClose}>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li className="active">
                <a href="/bangtin" className="iq-waves-effect">
                  <i className="las la-newspaper" />
                  <span>Newsfeed</span>
                </a>
              </li>
              <li>
                <a href="/nhantin" className="iq-waves-effect">
                  <i className="lab la-rocketchat" />
                  <span>Chat</span>
                </a>
              </li>

            </ul>
          </nav>
          <div className="p-3" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
