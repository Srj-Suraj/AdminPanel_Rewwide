import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './ViewProduct.css';

// img
import img_icon from '../img/Prod1.jpg';

function ViewProduct(){
    return(
      <>
<div className="container" >

<div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">View Products  </p>
        <Link to='/edit-product' className="btn bg-primary text-light float-right ">Edit this Product</Link>
        
</div>
  

<div className="col-md-10 box shadow mb-5 mr-auto ml-auto p-5 d-flex">
{/* images section  */}
<div className='row col-md-6'>
        <div className="main-img-container">
          <img src={img_icon} className="img-thumbnail rounded  mb-3" alt="..." />
        </div>
        <div className="img-container ">
          <img src={img_icon} className="img-thumbnail rounded  w-100 mb-3" alt="..." />
        </div>
        <div className="img-container ">
          <img src={img_icon} className="img-thumbnail rounded  w-100 mb-3" alt="..." />
        </div>
        <div className="img-container ">
          <img src={img_icon} className="img-thumbnail rounded  w-100 mb-3" alt="..." />
        </div>
        <div className="img-container ">
          <img src={img_icon} className="img-thumbnail rounded  w-100 mb-3" alt="..." />
        </div>

</div>

{/* details section */}
<div className="row col-md-6 ml-3 ">
  <div className='col-md-6'>
                <p className="textHead mt-1">Product Name</p>
                <p className="text">Iphone 13 pro</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">Category</p>
                <p className="text">Electronics</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">Price</p>
                <p className="text">Price</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">Discount</p>
                <p className="text">Discount</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">Sub Text</p>
                <p className="text">Sub Text</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">SKU</p>
                <p className="text">SKU</p>
  </div>
  <div className='col-md-6'>
  <p className="textHead mt-1">Meta Title</p>
                <p className="text">Meta Title</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-1">Meta Keyword</p>
                <p className="text">Meta Keyword</p>
  </div>
                
  <div className='col-md-6'>
  <p className="textHead mt-1">Description</p>
                <p className="text">Description</p>
  </div>
                

                

                

               

              

                

                

                

                

                
            </div>

</div>






</div>
</>
    
    );
}

export default  ViewProduct ;