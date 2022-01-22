import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './ViewCategory.css';

// img
function ViewCategory(){
    return(
      <>
<div className="container" >

<div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">View Category  </p>
        <Link to='/edit-category' className="btn bg-primary text-light float-right ">Edit this Category</Link>
        
</div>
  

<div className="row col-md-10 box shadow mb-5 mr-auto ml-auto p-5 ">


  <div className='col-md-6'>
                <p className="textHead mt-3">Categories</p>
                <p className="text">Categories</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">Sub Categories</p>
                <p className="text">Sub Categories</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">Product</p>
                <p className="text">Product</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">SKU</p>
                <p className="text">SKU</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">City</p>
                <p className="text">City</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">Province/State</p>
                <p className="text">Province/State</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-3">Country</p>
                <p className="text">Country</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-3">Zip Code</p>
                <p className="text">Zip Code</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-3">Service charge %</p>
                <p className="text">Service charge %</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-3">Product commission %</p>
                <p className="text">Product commission %</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-3">VAT/GST %</p>
                <p className="text">VAT/GST %</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-3">Logistic charge %</p>
                <p className="text">Logistic charge %</p>
  </div>
                

                

                

               

              

                

                

                

                

                
           

</div>






</div>
</>
    
    );
}

export default  ViewCategory ;