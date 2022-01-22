import React from 'react';
import {Link} from 'react-router-dom';
// css
import './reviewList.css';

// img


function ReviewList(){
    return(
        <>
        <div className="container" >

<div className="col-md-12   ">
        <p className="btn table-title">Review list </p>

</div>

{/* table */}
<div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
        
        
        
        <table className="table  table-hover">
                <thead> 
                    <tr className='table-borderless'>
                        <th scope="col">Category</th>
                        <th scope="col">Region</th>
                        <th scope="col">Manufecturer</th>
                        <th scope="col">Product</th>
                        <th scope="col" className='last-column' ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Category  </td>
                        <td className="align-middle ">Region </td>
                        <td className="align-middle ">Manufacturer  </td>
                        <td className="align-middle ">Product  </td>
                        <td className="align-middle "><Link to='/review' className="btn btn-primary"  > Review </Link></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>





        </div>
        </>
    );
}

export default ReviewList  ;
