import React, { useRef } from 'react';


function RightBar() {
  const ref = useRef(null)
  const toggleRightbar = () =>{
    if(ref.current.classList.contains('right-sidebar')){
      ref.current.classList.remove('right-sidebar')
    }else{
      ref.current.classList.add('right-sidebar')
    }
  }
  return (
    <>
      <div className="right-sidebar-mini" ref={ref} >
        <div className="right-sidebar-panel p-0">
          <div className="iq-card shadow-none" >
            <div className="iq-card-body p-0">
              <div className="media-height p-3" >
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/01.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Anna Sthesia</a></h6>
                    <p className="mb-0">Just Now</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Paul Molive</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Anna Mull</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/04.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Paige Turner</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/11.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Bob Frapples</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Barb Ackue</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <img className="rounded-circle avatar-50" src="images/user/03.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/12.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <img className="rounded-circle avatar-50" src="images/user/01.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Pete Sariya</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="media align-items-center">
                  <div className="iq-profile-avatar">
                    <img className="rounded-circle avatar-50" src="images/user/02.jpg" alt="" />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0"><a href="#">Monty Carlo</a></h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
              </div>
              <div className="right-sidebar-toggle bg-primary mt-3" onClick={toggleRightbar}>
                <i className="ri-arrow-left-line side-left-icon" />
                <i className="ri-arrow-right-line side-right-icon"><span className="ml-3 d-inline-block">Close Menu</span></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default RightBar;
