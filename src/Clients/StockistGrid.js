import React from 'react';
import {Link} from 'react-router-dom'; 


// images
import PersonDP1 from '../img/s1.jpg';
import PersonDP2 from '../img/s2.jpg';
import PersonDP3 from '../img/s3.jpg';
import PersonDP4 from '../img/s4.jpg';
import PersonDP5 from '../img/s5.jpg';
import PersonDP6 from '../img/s6.jpg';
import PersonDP7 from '../img/s7.jpg';
import PersonDP8 from '../img/s8.jpg';
import PersonDP9 from '../img/s9.jpg';
import PersonDP10 from '../img/s10.jpg';



function StockistGrid(){
return(<>
<div className='row'>


{/* person card  */}

<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP3} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Blane Winstead	</h5>
        <b>RW-745</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP4} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Matthew Rasberry	</h5>
        <b>RW-95</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP5} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Matthew Rasberry	</h5>
        <b>RW-84</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP6} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Brady Waltz</h5>
        <b>RW-34</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP1} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Jenny Fouracre</h5>
        <b>RW-485</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP2} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Adelyn Gillon</h5>
        <b>RW-46</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP7} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Galen Fill</h5>
        <b>RW-54</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>
<div className="col-md-3 p-3">
    <div className="col-md-12 card shadow text-center p-4 HoverContainer">
        <img src={PersonDP8} alt='...' className="GridPersonDP rounded-circle mt-4 mx-auto " />
        <h5 className='mt-4'>Galen Fill</h5>
        <b>RW-876</b>
        <div className='row mt-4 mb-2'>
        <Link to='/manufacturer-details' className='btn btn-sm btn-success rounded-pill col-md-5 mx-auto px-1 py-2'>View details</Link>
        <Link to='/request-list' className='btn btn-sm btn-primary rounded-pill col-md-5 mx-auto px-1 py-2'>Request List</Link>
        </div>
        {/* Chat Btn */}
        <div className="overlay">
            <button className="chatBTN btn btn-info rounded-pill">Chat</button>
        </div>
    </div>
</div>




{/* pagination  */}
<div className='ml-auto mr-3 mt-4 nav   justify-content-end'>
<nav aria-label="...">
<ul className="pagination">
    <li className="page-item disabled">
    <button className="page-link"  tabIndex="-1">Previous</button> </li>
    <li className="page-item active">
        <button className="page-link" >1</button></li>
    <li className="page-item ">
    <button className="page-link" >2 </button>  </li>
    <li className="page-item">
        <button className="page-link" >3</button></li>
    <li className="page-item">
    <button className="page-link" >Next</button>    </li>
</ul>
</nav>
</div>



</div>





</>)
}

export default  StockistGrid;