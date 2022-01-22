import React from 'react';
// import {Link} from 'react-router-dom';

// css
import './subscription.css';

// img

function Subscription(){
    return(
        <>
<div className="container" >
<h4 className='col-md-12 text-center mt-5'>  The right plane for Right Business</h4>
<div className="mid   " >
 
<div className='d-flex  '>
    <div className='subCard  card shadow  text-center'>
        <h5 >Basic</h5>
        <ul className='text-left '>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Upload upto 5 categories and product    </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Attach and post description   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Set you rates   </p> 
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Exclusive deals   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Advance Statistic   </p>
                </li>
        </ul>
        <div className='d-flex align-items-center justify-content-center '>
            <h6 >$</h6>
            <h3 >123 </h3>
            <h6>/3 month</h6>
        </div>
        <button className='btn  pl-5 pr-5 border-orange'>Buy</button>
    </div>
    
    

    <div className='subCard  card shadow  text-center '>
    <button className='btn bg-orange recommended-btn '>Recommended</button>
        <h5>Intermediate</h5>
        <ul className='text-left'>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Upload upto 10 categories and product    </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Attach and post description   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Set you rates   </p> 
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Exclusive deals   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Advance Statistic   </p>
                </li>
        </ul>
        <div className='d-flex align-items-center justify-content-center'>
            <h6 >$</h6>
            <h3 >300 </h3>
            <h6>/6 month</h6>
        </div>
        <button className='btn bg-orange pl-5 pr-5 '>Buy</button>
    </div>
    
    
    <div className='subCard  card shadow  text-center'>
        
        <h5>Advance</h5>
        <ul className='text-left'>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Upload unlimitted categories and product    </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Attach and post description   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Set you rates   </p> 
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Exclusive deals   </p>
                </li>
            <li className='d-flex'><i className='fa fa-check mr-2 mt-1'/> 
                <p>Advance Statistic   </p>
                </li>
        </ul>
        <div className='d-flex align-items-center justify-content-center'>
            <h6 >$</h6>
            <h3 >600 </h3>
            <h6>/yearly</h6>
        </div>
        <button className='btn  pl-5 pr-5 border-orange'>Buy</button>
    </div>
    
    


</div>

</div>


</div>
</>
    );
}

export default Subscription  ;
