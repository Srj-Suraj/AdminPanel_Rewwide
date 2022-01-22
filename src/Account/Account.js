import React from 'react';
import {Link} from 'react-router-dom';
// css
import './account.css';

// img
import img1 from '../img/dp-1.jpg';

function Account(){
    return(
<>
<div className="container" >

<div className='row '>
    <div className='col-md-4'>

    
        <div className=" acc-card shadow">
            <img src={img1} alt='...'/>
            <h5 className="MName">Ryan Reynolds</h5>
            <p className="id">RWE-78</p>

            <Link to="/profile-setting" className="edit-btn btn ">Edit Prifile</Link>
            <Link to='/clients-grid' className="cli-btn btn">Clients</Link>
            <hr/>
            <div className='d-flex p-2 justify-content-around'>
                <div>
                    <p className='num-tag'>65K</p><p className='tag-title'>Manufacturers</p>
                </div>
                <div>
                    <p className='num-tag'>505K</p><p className='tag-title'>Stokies</p>
                </div>
                <div>
                    <p className='num-tag'>50K</p><p className='tag-title'>Retailer</p>
                </div>
                <div>
                    <p className='num-tag'>600K</p><p className='tag-title'>Customer</p>
                </div>
            </div>
        </div>

        <div className="dtl-card shadow mt-5 p-4 mb-5">
           <b className='textdead'>Profile Details</b>
           
           <table className='table table-hover'>
           <tbody>
               <tr>
                   <td className='text-primary' >Name</td>
                   <td className="align-middle ">Raino</td>
               </tr>
               <tr>
                   <td className='text-primary' >Location</td>
                   <td className="align-middle ">canada</td>
               </tr>
               <tr>
                   <td className='text-primary' >Address</td>
                   <td className="align-middle ">c-45 diaya</td>
               </tr>
               <tr>
                   <td className='text-primary' >Phone</td>
                   <td className="align-middle ">+4 4556 468</td>
               </tr>
               <tr>
                   <td className='text-primary' >Email</td>
                   <td className="align-middle ">dfdf@gmail.com</td>
               </tr>
               <tr>
                   <td className='text-primary' >website</td>
                   <td className="align-middle ">www.dfd.com</td>
               </tr>
               </tbody>
           </table>
        </div>

       
    </div>
    
    <div className='col-md-8 acc-card text-left  mb-5  shadow'>
        <textarea className="form-control" id="accText" rows="8" placeholder='What are you doing right now?'></textarea>
        <h5 className='mt-3 mb-3'>Biography</h5>
        <p>here display biography </p>
    </div>


</div>



</div>
</>
    );
}

export default Account  ;
