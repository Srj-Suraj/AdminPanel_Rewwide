import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './EditCategory.css';

// img


function EditCategory(){
    return(
      <>
<div className="container" >

<div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">Edit Categories  </p>
        <Link to='/add-category' className="btn bg-primary text-light float-right ">Requested Categories</Link>
        
</div>
  
  

    <div  className="col-md-10 box shadow mb-5 mr-auto ml-auto p-5">
  
      <form className="row">
        <div className="form-group col-md-4 ">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Sub Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Product</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>SKU</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>City</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Province/State</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Country</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Zip Code</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Service charge % </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Product commission %</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>VAT/GST %</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 "  >
          <label>Logistic charge %</label>
          <input type="text" className="form-control" disabled />
        </div>
       
        <button type="submit" className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3">
          Cancel
        </button>
        <button type="submit" className=" w-auto btn btn-primary mr-auto mt-3">
          Submit
        </button>

      </form>
    </div>





</div>
</>
    
    );
}

export default  EditCategory ;