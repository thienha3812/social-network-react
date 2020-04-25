import React, { useRef } from 'react';


function RightBar(props) {
  const ref = useRef(null)
  const { list_user } = props
  console.log(list_user)
  const toggleRightbar = () => {
    if (ref.current.classList.contains('right-sidebar')) {
      ref.current.classList.remove('right-sidebar')
    } else {
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
                {list_user.map(x =>
                  <>
                    <div className="media align-items-center mb-4">
                      {
                        x.is_online ? <div className="iq-profile-avatar status-online">
                          <img className="rounded-circle avatar-50" src={x.avatar} alt="" />
                        </div> : <div className="iq-profile-avatar status-offline">
                            <img className="rounded-circle avatar-50" src={x.avatar} alt="" />
                          </div>
                      }
                      <div className="media-body ml-3">
                        <h6 className="mb-0"><a href="#">{x.full_name}</a></h6>
                        <p className="mb-0">Just Now</p>
                      </div>
                    </div>
                  </>
                )}
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
