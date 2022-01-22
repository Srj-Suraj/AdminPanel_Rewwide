import React from 'react';
import {Link} from 'react-router-dom'; 

import './chatbox.css';

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

function Chatbox(){
    return(
        <>

<div className="container row" >

{/* chat list  */}
<div className="col-md-4 box shadow pt-3 pb-3">

<div className='col-md-12 '>
<input type="text" className="form-control " id="Search"  placeholder="Search" />
</div>


<table className="table  table-hover mt-3">    
    <tbody>        
        <tr >
            <td className="align-middle ">
                <img src={PersonDP1} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP2} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP3} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP4} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP5} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP6} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <img src={PersonDP7} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
                <p className='text-grey '>Hii!</p>    
             </td>
            <td className="align-middle text-grey">1h ago  </td>
        </tr>
        
        
        
        

    </tbody>
</table>




        </div>



{/* chat box  */}

<div className='col-md-7 box bg-secondary ml-3'>
    <div className='row msgHeader  '>
        <tr className='p-3'>
            <td className="align-middle pr-3">
                <img src={PersonDP1} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle pr-auto ">
                <p className='font-weight-bold m-0 '>Jenny Fouracre</p>    
             </td>
         </tr>
         <i className='chatPersonDetails fa fa-ellipsis-h' />
    </div>

    <messagebox>
        {/* inside this message will be show   */}


    </messagebox>

    <div className='row typeMsg'>
        <input type="text" className="form-control col-sm-11" id="Search"  placeholder="Message" />
        <button className='btn btn-primary col-sm-1'>Send</button>
    </div>
</div>








        </div>
</>
    
    );
}

export default Chatbox  ;