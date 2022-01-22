import React from 'react';
import {Link} from 'react-router-dom';
// css
import './requestList.css';

// img


function RequestList(){
    return(
        <>
        <div className="container" >

<div className="col-md-12   ">
        <p className="btn table-title">Request list </p>

</div>

{/* table */}
<div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
        
        
        
        <table className="table  table-hover">
                <thead>
                    <tr className='table-borderless'>
                        <th scope="col">Region</th>
                        <th scope="col">Category</th>
                        <th scope="col">Product</th>
                        <th scope="col">Level</th>
                        <th scope="col" className='last-column' ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle ">Los Angeles  </td>
                        <td className="align-middle ">Office Products </td>
                        <td className="align-middle ">Diary  </td>
                        <td className="align-middle ">Customer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">San Antonio  </td>
                        <td className="align-middle ">Electronic </td>
                        <td className="align-middle ">Security Cameras  </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Houston  </td>
                        <td className="align-middle ">Jewelry </td>
                        <td className="align-middle ">Bangles </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Philadelphia  </td>
                        <td className="align-middle ">Accessories </td>
                        <td className="align-middle ">Watches </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">New York  </td>
                        <td className="align-middle ">Accessories </td>
                        <td className="align-middle ">Wallets </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Los Angeles  </td>
                        <td className="align-middle ">Office Products </td>
                        <td className="align-middle ">Diary  </td>
                        <td className="align-middle ">Customer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">San Antonio  </td>
                        <td className="align-middle ">Electronic </td>
                        <td className="align-middle ">Security Cameras  </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Houston  </td>
                        <td className="align-middle ">Jewelry </td>
                        <td className="align-middle ">Bangles </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Philadelphia  </td>
                        <td className="align-middle ">Accessories </td>
                        <td className="align-middle ">Watches </td>
                        <td className="align-middle ">Retailer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">New York  </td>
                        <td className="align-middle ">Accessories </td>
                        <td className="align-middle ">Wallets </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle "><Link to='/review'className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    

                </tbody>
            </table>
        </div>





        </div>
        </>
    );
}

export default RequestList  ;
