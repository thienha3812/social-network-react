import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import {  MdChatBubble } from "react-icons/md";
import './drawer.css';
function Drawer() {
  const [isOpen, setOpen] = useState(false)
  const showDrawer = (e) => {
    let el = document.getElementsByClassName("drawer")
    el[0].classList.add("fade-out")
    setOpen(true)
  }
  const hideDrawer = (e) => {
    let el = document.getElementsByClassName("drawer")
    el[0].classList.remove("fade-out")
    setOpen(false)
  }
  return (
    <div onMouseOver={showDrawer} onMouseLeave={hideDrawer} className="drawer d-flex d-block flex-column align-items-center pl-2 pr-2" style={{ width: "100%", height: "100%", overflow: "hidden", bottom: "0", transition: "width 0.5s",backgroundColor:"#f7347a" }}>
      <div style={{transform:"translateY(80%)",position:"fixed"}}>
        <div className="d-flex flex-row align-items-center w-100">
          <div className="glass d-flex align-items-center mt-4 justify-content-center">
            <FaHome style={{ color: "white", fontSize: "20px", top: "50%" }} />
          </div>
          {isOpen && <small className="text-white mt-4 ml-1">Bảng tin </small>}
        </div>
        <div className="d-flex flex-row align-items-center w-100">
          <div className="glass d-flex align-items-center mt-4 justify-content-center">
            <MdChatBubble style={{ color: "white", fontSize: "20px", top: "50%" }} />
          </div>
          {isOpen && <small className="text-white mt-4 ml-1">Nhắn tin</small>}
        </div>
        <div className="d-flex flex-row align-items-center w-100">
          <div className="glass d-flex align-items-center mt-4 justify-content-center">
            <FaHome style={{ color: "white", fontSize: "20px", top: "50%" }} />
          </div>
          {isOpen && <small className="text-white mt-4 ml-1">Bạn bè xung quanh</small>}
        </div>
        <div className="d-flex flex-row align-items-center w-100">
          <div className="glass d-flex align-items-center mt-4 justify-content-center">
            <FaHome style={{ color: "white", fontSize: "20px", top: "50%" }} />
          </div>
          {isOpen && <small className="text-white mt-4 ml-1">Khám phá địa điểm </small>}
        </div>
      </div>
    </div>
  )
}

export default Drawer;
