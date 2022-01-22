import React from 'react';

// css import
import './profileSetting.css';

// import component 
import EditProfile from './EditProfile'
import NotificationSetting from './NotificationSetting'




function ProfileSetting() {
  return (
    <>
      <div className="container" >

        <ul className="nav nav-tabs md-tabs mr-0" id="myTabMD" role="tablist">
         
          <li className="nav-item">
            <a
              className="nav-link active"
              id="EditProfile-tab-md"
              data-toggle="tab"
              href="#EditProfile-md"
              role="tab"
              aria-controls="EditProfile-md"
              aria-selected="true"
            >
              Edit Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab-md"
              data-toggle="tab"
              href="#profile-md"
              role="tab"
              aria-controls="profile-md"
              aria-selected="false"
            >
              Change Password
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab-md"
              data-toggle="tab"
              href="#contact-md"
              role="tab"
              aria-controls="contact-md"
              aria-selected="false"
            >
              Notification
            </a>
          </li>
        </ul>



        <div className="tab-content card pt-5" id="myTabContentMD">
          
          
          {/* first tab */}
          <div
            className="tab-pane fade show active pb-5"
            id="EditProfile-md"
            role="tabpanel"
            aria-labelledby="EditProfile-tab-md"
          >
            <EditProfile />
            </div>


          {/* second tab */}
          <div
            className="tab-pane fade p-5 "
            id="profile-md"
            role="tabpanel"
            aria-labelledby="profile-tab-md"
          >
            <h5 className="ml-5">Change Password </h5>
            <form className="col-md-6 pl-5 pr-5">
              <div className="form-group col-md-12 ">
                <label >Current Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-12 ">
                <label >New Password </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-12 ">
                <label >Confirm Password </label>
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className='btn btn-primary  mr-3 ml-3'>
                Save
              </button>
            </form>



          </div>
          {/* third tab */}
          <div
            className="tab-pane fade"
            id="contact-md"
            role="tabpanel"
            aria-labelledby="contact-tab-md"
          >
            <NotificationSetting />
          </div>
        </div>



      </div>

    </>
  );
}

export default ProfileSetting;




