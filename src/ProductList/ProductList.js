import React from 'react';
import {Link} from 'react-router-dom';
// css
import './productList.css';

const ActiveStatus = <div className="btn text-success font-weight-bold"  > Active </div>;
const DisableStatus = <div className="btn text-danger font-weight-bold"  > Disable </div>;



function ProductList(){
    return(
        <>
        <div className="container" >

<div className="col-md-12  ">
        <p className="btn table-title">Product List  </p>
        <Link to='/add-product' className="btn bg-light border-primary float-right mr-2">+ Add Product</Link>

</div>

{/* table */}
<div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">


<div className='d-flex'>

<div className="dropdown mr-3">
    <select className="form-control" id="category">
        <option  value="0">All Category</option>
        <option value="1">Electronic</option>
        <option value="2">Office Product</option>
        <option value="3">Cloths</option>
    </select>
</div>


<form>
    <div className="form-group">
        <input type="email" className="form-control" id="Search"  placeholder="Search Product" />
    </div>
</form>
                

</div>
{/* table  */}
<table className="table  table-hover">
        <thead>
            <tr className='table-borderless'>
                <th scope="col-md-2">Region</th>
                <th scope="col-md-2">Category</th>
                <th scope="col-md-2">Product</th>
                <th scope="col-md-2">Level</th>
                <th scope="col-md-2" >Status</th>
                <th scope="col-md-2" className='last-column'></th>

            </tr>
        </thead>
        
        <tbody>
            <tr>
                <td className="align-middle ">New York  </td>
                <td className="align-middle ">Jewelry </td>
                <td className="align-middle ">Neckless  </td>
                <td className="align-middle ">Manufacturer  </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Chicago  </td>
                <td className="align-middle ">Electronic </td>
                <td className="align-middle ">Speakers  </td>
                <td className="align-middle ">Retailer  </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Philadelphia  </td>
                <td className="align-middle ">Electronic </td>
                <td className="align-middle ">DSLR Cameras  </td>
                <td className="align-middle ">Stockist   </td>
                <td className="align-middle ">{DisableStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Philadelphia  </td>
                <td className="align-middle ">Grocery  </td>
                <td className="align-middle ">Rice  </td>
                <td className="align-middle ">Customer    </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            
            <tr>
                <td className="align-middle ">New York  </td>
                <td className="align-middle ">Jewelry </td>
                <td className="align-middle ">Neckless  </td>
                <td className="align-middle ">Manufacturer  </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Chicago  </td>
                <td className="align-middle ">Electronic </td>
                <td className="align-middle ">Speakers  </td>
                <td className="align-middle ">Retailer  </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Philadelphia  </td>
                <td className="align-middle ">Electronic </td>
                <td className="align-middle ">DSLR Cameras  </td>
                <td className="align-middle ">Stockist   </td>
                <td className="align-middle ">{DisableStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Philadelphia  </td>
                <td className="align-middle ">Grocery  </td>
                <td className="align-middle ">Rice  </td>
                <td className="align-middle ">Customer    </td>
                <td className="align-middle ">{ActiveStatus}</td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/view-product' className="dropdown-item" >View</Link>
                        <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                    </div>
                </td>
            </tr>
            
            
            

        </tbody>
    </table>

{/* pagination  */}
        <div className='nav   justify-content-end'>
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











        </div>
        </>
    );
}

export default ProductList  ;
