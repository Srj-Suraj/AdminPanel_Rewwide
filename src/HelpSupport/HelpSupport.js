import React from 'react';
import {Link} from 'react-router-dom';

// css
import './helpSupport.css';

// img


function HelpSupport(){
    return(
        <>
<div className="container" >

<div className="mid   " >
<div className='d-flex flex-wrap align-items-center  mt-5 '>
    <div className='helpCard  card shadow   '>
        <button className='btn help-icon shadow'>
            <i className='fa fa-phone '></i> 
        </button>
        <h5>Call Us</h5>
        <p> Share your problem with us, we will solve your problem</p>
        <button className='btn help-btn' data-toggle="modal" data-target="#CallPopoUp">Call</button>

        {/* call pop up */}
            <div className="modal fade" id="CallPopoUp" tabIndex="-1" role="dialog" aria-labelledby="CallPopoUpLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="CallPopoUpLabel">Call Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body row ">
                            <form className="col-md-12 text-left "> 
                                <div className="form-group  ">
                                    <label >Country </label>
                                    <select className='form-control'>
                                        <option>Canada</option>
                                        <option>America</option>
                                        <option>China</option>
                                    </select>
                                </div>
                                <div className="form-group ">
                                    <label >User Number</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="form-group ">
                                    <label >Reason</label>
                                    <textarea type="text" className="form-control" rows='4'  />
                                </div>
                                <button type='submit' className='btn btn-primary' >Submit</button>
                            </form>
                </div>
                
            </div>
            </div>
            </div>

    </div>
    
    

    <div className='helpCard  card shadow  '>
        <button className='btn help-icon shadow'>
            <i className='fa fa-envelope '></i> 
        </button>
        <h5>Email Us</h5>
        <p> Email us your problem and feedback</p>
        <button  className='btn help-btn' data-toggle="modal" data-target="#MailPopoUp" >Email</button>

        {/* mail pop up */}
        <div className="modal fade" id="MailPopoUp" tabIndex="-1" role="dialog" aria-labelledby="MailPopoUpLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="MailPopoUpLabel">Mail Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                        <form className="col-md-12 text-left "> 
                                <div className="form-group  ">
                                    <label >Country </label>
                                    <select className='form-control'>
                                        <option>Canada</option>
                                        <option>America</option>
                                        <option>China</option>
                                    </select>
                                </div>
                                <div className="form-group ">
                                    <label >Your mail</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="form-group ">
                                    <label >Reason</label>
                                    <textarea type="text" className="form-control" rows='4'  />
                                </div>
                                <button type='submit' className='btn btn-primary' >Submit</button>
                            </form>
                </div>
                
            </div>
            </div>
            </div>
    </div>
    
    
    <div className='helpCard  card shadow   '>
        <button className='btn help-icon shadow'>
            <i className='fa fa-comments-o '></i> 
        </button>
        <h5>Chat</h5>
        <p> Chat with our valuable customer support      </p>
        <Link to='/chatbox' className='btn help-btn'>Chat</Link>
    </div>
    
    


</div>

</div>


</div>
</>
    );
}

export default HelpSupport  ;
