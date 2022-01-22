import React from 'react';


// img import
import ProfilePic2 from '../img/Avtar01.jpg';



function EditProfile(){
    return(
        <>
        {/* profile  */}
        <div className="Profile mb-4 ml-5 ">
                        <div className="dp">
                        <img src={ProfilePic2}  alt='...' className="userDP  " circle="Profile Image"/>
                        </div>
                        <div>
                            <p className="userName">Sierra Ferguson</p>
                            <p className="userStatus">s.ferguson@gmail.com</p>
                            <button className="btn btn-primary" >
                                Change Avatar
                            </button>
                        </div>
                    </div>



        <h5 className="ml-5">Profile Setting </h5>
      <form className="row pl-5 pr-5"> 
        <div className="form-group col-md-4 ">
            <label >Your Name </label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >User Name</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Email</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Your Role</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Status</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Department</label>
            <input type="text" className="form-control"  />
        </div>
     
     

      <h5 className="col-md-12 mt-3 mb-3">Contact Details</h5>

        <div className="form-group col-md-4 ">
            <label >Phone Number</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Address Line 1</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Address Line 2</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Country</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >City</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Province/State </label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Post Code</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Website</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Language</label>
            <input type="text" className="form-control"  />
        </div>
        <button type="submit" className='w-auto btn border-primary ml-auto mr-2 '>
            cancel
        </button>
        <button type="submit" className='w-auto btn btn-primary  mr-3'>
            Save
        </button>
      </form>
        
        </>

    );
}

export default EditProfile  ;