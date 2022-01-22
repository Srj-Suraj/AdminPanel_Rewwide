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
                    <h5 className="modal-title" id="CallPopoUpLabel">call title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...
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
                    <h5 className="modal-title" id="MailPopoUpLabel">mail title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...
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
