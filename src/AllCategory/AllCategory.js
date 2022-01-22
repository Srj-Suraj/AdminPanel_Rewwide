import React from 'react';
import {Link} from 'react-router-dom';
// css
import './allCategory.css';

// img


function AllCategory(){
    return(
        <>
        <div className="container" >

        <div className="row  ">
            <p className="btn table-title">All Category </p>
            <Link  to='/add-category' className="btn bg-primary text-light ml-auto ">+ Add Category</Link>

        </div>

{/* table */}
<div className='row'>
<div className="col-md-12 box  mt-3  p-4 shadow ">
       
       <div className='d-flex'>

            <div className="dropdown mr-3">
                <select className="form-control" id="category">
                    <option >All Category</option>
                    <option value="1">Appliances </option>
                    <option value="2">Baby Product</option>
                    <option value="3">Books</option>
                    <option value="3">Books</option>
                    <option value="3">Grocery </option>
                    <option value="3">Electronics </option>
                </select>
            </div>


            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="Search"  placeholder="Search Product" />
                </div>
            </form>
                            
        
       </div>


<table className="table  table-hover">
        <thead>
            <tr className='table-borderless'>
                <th scope="col">Region</th>
                <th scope="col">Category </th>
                <th scope="col">Clients Name</th>
                <th scope="col">Total Sale</th>
                <th scope="col" className='last-column'></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="align-middle ">Canada </td>
                <td className="align-middle ">Electronic  </td>
                <td className="align-middle ">Ryan Reynolds  </td>
                <td className="align-middle ">$7000  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Chicago </td>
                <td className="align-middle ">Baby Product  </td>
                <td className="align-middle ">Galen Fill  </td>
                <td className="align-middle ">$562  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Los Angeles </td>
                <td className="align-middle ">Grocery   </td>
                <td className="align-middle ">Blane Winstead  </td>
                <td className="align-middle ">$4875  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">San Diego </td>
                <td className="align-middle ">Office Products   </td>
                <td className="align-middle ">Edmar Tavares  </td>
                <td className="align-middle ">$125  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Kitchen Product  </td>
                <td className="align-middle ">Merinda Thomas  </td>
                <td className="align-middle ">$6549  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Canada </td>
                <td className="align-middle ">Electronic  </td>
                <td className="align-middle ">Ryan Reynolds  </td>
                <td className="align-middle ">$7000  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Chicago </td>
                <td className="align-middle ">Baby Product  </td>
                <td className="align-middle ">Galen Fill  </td>
                <td className="align-middle ">$562  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">Los Angeles </td>
                <td className="align-middle ">Grocery   </td>
                <td className="align-middle ">Blane Winstead  </td>
                <td className="align-middle ">$4875  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">San Diego </td>
                <td className="align-middle ">Office Products   </td>
                <td className="align-middle ">Edmar Tavares  </td>
                <td className="align-middle ">$125  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Kitchen Product  </td>
                <td className="align-middle ">Merinda Thomas  </td>
                <td className="align-middle ">$6549  </td>
                <td className="align-middle ">
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                        <Link to='/view-category' className="dropdown-item" >View </Link>
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




        </div>
        </>
    );
}

export default  AllCategory ;
