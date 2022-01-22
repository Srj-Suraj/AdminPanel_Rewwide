import React from 'react';
// import {Link} from 'react-router-dom'; 

// css
import './EditProduct.css';

// img
import img_icon from '../img/Prod1.jpg';

function EditProduct(){
    return(
      <>
<div className="container" >

<div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">Edit Products  </p>
        {/* <Link to='/view-product' className="btn bg-primary text-light float-right ">View Product</Link> */}
        
</div>
  

    <div  className="col-md-10 box shadow mb-5 mr-auto ml-auto p-5">     
      
      <form className="row">
      <div className="form-group col-md-4 ">
          <label>Category</label>
          <select className="form-control" id="category" >
            <option >Select Category</option>
            <option value="1">Electronics</option>
            <option value="2">Office Product</option>
            <option value="3">Cloths</option>
          </select>
        </div>
        <div className="form-group col-md-4 ">
          <label>Product Name</label>
          <input type="text" className="form-control" value='Product Name' />
        </div>
        <div className="form-group col-md-4 ">
          <label>Sub Text</label>
          <input type="text" className="form-control" value='Sub Text' />
        </div>
        
        <div className="form-group col-md-4 ">
          <label>SKU</label>
          <select className="form-control" id="SKU">
            <option >Select SKU</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        
        
        <div className="form-group col-md-4 ">
          <label>Price </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">$</span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Price"  value='price'/>
          </div>
        </div>
        <div className="form-group col-md-4 ">
          <label>Discount</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">%</span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Discount" value='dicount' />
          </div>
        </div>
        <div className="form-group col-md-4 ">
          <label>Meta Title</label>
          <input type="text" className="form-control" value='meta title' />
        </div>
        <div className="form-group col-md-4 ">
          <label>Meta Keyword</label>
          <input type="text" className="form-control"  value='meta keys'/>
        </div>
        <div className="form-group col-md-4 ">
          <label>Status</label>
          <select className="form-control" id="category" disabled>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
        
        <div className="form-group col-md-12 ">
          <label>Description</label>
          <textarea className="form-control" id="Description" rows="3" value='description here' ></textarea>
        </div>
        
        <div className='col-md-12 d-flex mb-5 mt-5'>

        <div className="img-container ">
          <img src={img_icon} className="card rounded  w-100 mb-3" alt="..." />
          <button  className=' btn btn-md btn-light border-primary '>     Edit</button>
        </div>
        <div className="img-container ">
          <img src={img_icon} className="card rounded  w-100 mb-3" alt="..." />
          <button  className=' btn btn-md btn-light border-primary '>     Edit</button>
        </div>
        <div className="img-container ">
          <img src={img_icon} className="card rounded  w-100 mb-3" alt="..." />
          <button  className=' btn btn-md btn-light border-primary '>     Edit</button>
        </div>
        <div className="img-container ">
          <img src={img_icon} className="card rounded  w-100 mb-3" alt="..." />
          <button  className=' btn btn-md btn-light border-primary '>     Edit</button>
        </div>
        <div className="img-container ">
          <img src={img_icon} className="card rounded  w-100 mb-3" alt="..." />
          <button  className=' btn btn-md btn-light border-primary '>     Edit</button>
        </div>

        </div>


        
        
        <button type="submit" className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3">
          Cancel
        </button>
        <button type="submit" className="w-auto btn btn-primary mr-auto mt-3">
          Submit
        </button>
      </form>
    </div>



   
  








</div>
</>
    
    );
}

export default  EditProduct ;