import React from 'react';
import {Link} from 'react-router-dom';
// css
import './review.css';

// img
import img1 from '../img/dp-1.jpg';
import ProdImg1 from '../img/Prod1.jpg';
import ProdImg2 from '../img/Prod2.jpg';
import ProdImg3 from '../img/Prod3.jpg';
import ProdImg4 from '../img/Prod4.jpg';
import ImageDecline from './ImageDecline';
import BigImage from './BigImage';
import Decline from './Decline';

function Review(){
    return(
        <>
<div className="container" >
<h5 className="btn table-title">Review</h5>

<div className="row">
    {/*  profile section  */}
    <div className='col-md-4'>
        <div className="col-md-12 box p-2 shadow ">
            
            <div className="col-md-12  manuf-card2 mt-3 ">
                <img src={img1} alt='...' className='list-dp'/>
                <p className="mt-1 mb-0 font-weight-bold">User Id</p>
                <p className="id m-0">RWE-78</p>
            </div>

            <table className='table  mt-4 '>
              <tbody >
              <tr>
                <td className="text-primary mt-3">Name</td>
                <td >Ryan Reynolds</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">Vat/GST no.</td>
                <td >123456789</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">Region</td>
                <td >Canda</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">Total Sales</td>
                <td >1522</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">Date of birth</td>
                <td >13-03-2002</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">CIN no.</td>
                <td >147258369</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">City</td>
                <td >Toronto</td>
              </tr>
                <tr>
                <td className="text-primary mt-3">Total transaction</td>
                <td >$450</td>
              </tr>
              </tbody>
           </table>

        </div>
    </div>

{/* Request Category tab   */}
<div className='col-md-8 '>
<div className="col-md-12 box p-5   shadow ">
<form className="row">
<div className="form-group col-md-4 ">
  <label>Category</label>
  <select className="form-control" id="category" disabled>
    <option value="Electronic">Electronic</option>
    <option value="Baby Product">Baby Product</option>
    <option value="Office Product">Office Product</option>
  </select>
</div>
<div className="form-group col-md-4 ">
  <label>Product Name</label>
  <input type="text" className="form-control" placeholder='Iphon 13 pro' disabled/>
</div>
<div className="form-group col-md-4 ">
  <label>Sub Text</label>
  <input type="text" className="form-control" placeholder='Some Details' disabled />
</div>

<div className="form-group col-md-4 ">
  <label>SKU</label>
  <select className="form-control" id="SKU" disabled>
    <option value="1">kj-1698</option>
    <option value="2">fg-892</option>
    <option value="3">fr-963</option>
  </select>
</div>


<div className="form-group col-md-4 ">
  <label>Price </label>
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">$</span>
    </div>
    <input type="text" className="form-control" placeholder="1025" disabled />
  </div>
</div>
<div className="form-group col-md-4 ">
  <label>Discount</label>
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">%</span>
    </div>
    <input type="text" className="form-control" placeholder="12" disabled />
  </div>
</div>
<div className="form-group col-md-4 ">
  <label>Meta Title</label>
  <input type="text" className="form-control" placeholder="Iphon" disabled />
</div>
<div className="form-group col-md-4 ">
  <label>Meta Keyword</label>
  <input type="text" className="form-control" placeholder="Iphon, Cell Phone" disabled />
</div>
<div className="form-group col-md-4 ">
  <label>Status</label>
  <select className="form-control" id="Status" >
    <option value="Draft">Draft</option>
    <option value="Published">Published</option>
  </select>
</div>

<div className="form-group col-md-12 ">
  <label>Description</label>
  <textarea className="form-control" id="Description" rows="3" placeholder='This is details of the above product' disabled></textarea>
</div>


<p className="font-weight-bold text-primary mt-3 ml-2">Image Approval</p>
{/* image for Approval  */}
<div className=' col-md-12 d-flex mt-3 mb-4'>

      {/* image 1 */}
      <div className="col-md-3">
          <div className="HoverContainer">
              <img src={ProdImg1} className="review-img rounded " alt="..." />
              {/*hover Btn */}
              <div className="image-overlay">
                <div className='hoverBTN'>

                              {/* right BTN */}
                              <button type="button" className=" btn btn-sm btn-success rounded-pill mr-2">
                                <i className='fa fa-check-circle'/>
                                </button>

                              {/* cancel BTN */}
                              <button type="button" className=" btn btn-sm btn-danger rounded-pill" data-toggle="modal" data-target="#DeclineModal">
                                <i className='fa fa-times-circle'/>
                                </button>
                              {/* view btn */}
                              <button type="button" className=" btn btn-sm btn-primary rounded-pill mx-auto mt-3 " data-toggle="modal" data-target="#BigImgModal">
                                View
                                </button>
                </div>
              </div>
          </div>
      </div>

      {/* image 2 */}
      <div className="col-md-3">
          <div className="HoverContainer">
              <img src={ProdImg2} className="review-img rounded " alt="..." />
              {/*hover Btn */}
              <div className="image-overlay">
                <div className='hoverBTN'>

                              {/* right BTN */}
                              <button type="button" className=" btn btn-sm btn-success rounded-pill mr-2">
                                <i className='fa fa-check-circle'/>
                                </button>

                              {/* cancel BTN */}
                              <button type="button" className=" btn btn-sm btn-danger rounded-pill" data-toggle="modal" data-target="#DeclineModal">
                                <i className='fa fa-times-circle'/>
                                </button>
                              {/* view btn */}
                              <button type="button" className=" btn btn-sm btn-primary rounded-pill mx-auto mt-3 " data-toggle="modal" data-target="#BigImgModal">
                                View
                                </button>
                </div>
              </div>
          </div>
      </div>
      {/* image 3 */}
      <div className="col-md-3">
          <div className="HoverContainer">
              <img src={ProdImg3} className="review-img rounded " alt="..." />
              {/*hover Btn */}
              <div className="image-overlay">
                <div className='hoverBTN'>

                              {/* right BTN */}
                              <button type="button" className=" btn btn-sm btn-success rounded-pill mr-2">
                                <i className='fa fa-check-circle'/>
                                </button>

                              {/* cancel BTN */}
                              <button type="button" className=" btn btn-sm btn-danger rounded-pill" data-toggle="modal" data-target="#DeclineModal">
                                <i className='fa fa-times-circle'/>
                                </button>
                              {/* view btn */}
                              <button type="button" className=" btn btn-sm btn-primary rounded-pill mx-auto mt-3 " data-toggle="modal" data-target="#BigImgModal">
                                View
                                </button>
                </div>
              </div>
          </div>
      </div>
      {/* image 4 */}
      <div className="col-md-3">
          <div className="HoverContainer">
              <img src={ProdImg4} className="review-img rounded " alt="..." />
              {/*hover Btn */}
              <div className="image-overlay">
                <div className='hoverBTN'>

                              {/* right BTN */}
                              <button type="button" className=" btn btn-sm btn-success rounded-pill mr-2">
                                <i className='fa fa-check-circle'/>
                                </button>

                              {/* cancel BTN */}
                              <button type="button" className=" btn btn-sm btn-danger rounded-pill" data-toggle="modal" data-target="#imgDeclineModal">
                                <i className='fa fa-times-circle'/>
                                </button>
                              {/* view btn */}
                              <button type="button" className=" btn btn-sm btn-primary rounded-pill mx-auto mt-3 " data-toggle="modal" data-target="#BigImgModal">
                                View
                                </button>
                </div>
              </div>
          </div>
      </div>



</div>



<ImageDecline />
<BigImage />
<Decline />

<button type="submit" className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3" data-toggle="modal" data-target="#DeclineModal">
  Decline
</button>
<button type="submit" className=" w-auto btn btn-primary mr-auto mt-3">
  Approve
</button>

</form>


</div>
</div>

</div>

</div>
</>
    );
}

export default  Review ;
