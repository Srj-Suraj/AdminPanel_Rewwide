import React from 'react';
import {Link} from 'react-router-dom'; 


// images
import PersonDP1 from '../img/s1.jpg';
import PersonDP2 from '../img/s2.jpg';
import PersonDP3 from '../img/s3.jpg';
import PersonDP4 from '../img/s4.jpg';
import PersonDP5 from '../img/s5.jpg';
import PersonDP6 from '../img/s6.jpg';
import PersonDP7 from '../img/s7.jpg';
import PersonDP8 from '../img/s8.jpg';
import PersonDP9 from '../img/s9.jpg';
import PersonDP10 from '../img/s10.jpg';

function CustomerList(){
    return(
        <>

<div className="col-md-12 ">


<table className="table  table-hover">
    <thead>
        <tr className='table-borderless'>
            <th scope="col" className='check-box-column'>
                <input type='checkbox'  />
            </th>
            <th scope="col" className='dp-column'></th>
            <th scope="col">Name</th>
            <th scope="col">User Id</th>
            <th scope="col">Region</th>
            <th scope="col">Category</th>
            <th scope="col-sm-1" className='last-column'></th>
        </tr>
    </thead>
    
    <tbody>
    <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP7} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Galen Fill</td>
            <td className="align-middle ">RW-895  </td>
            <td className="align-middle ">San Antonio  </td>
            <td className="align-middle ">Jewelry   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP8} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Credell Grayson</td>
            <td className="align-middle ">RW-36  </td>
            <td className="align-middle ">Dallas  </td>
            <td className="align-middle ">Electronics   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP1} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Jenny Fouracre </td>
            <td className="align-middle ">RW-485  </td>
            <td className="align-middle ">New York  </td>
            <td className="align-middle ">Appliances   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP2} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Adelyn Gillon</td>
            <td className="align-middle ">RW-46  </td>
            <td className="align-middle ">Los Angeles  </td>
            <td className="align-middle ">Baby Products   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP3} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Blane Winstead</td>
            <td className="align-middle ">RW-745  </td>
            <td className="align-middle ">Chicago  </td>
            <td className="align-middle ">Books   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP4} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Matthew Rasberry</td>
            <td className="align-middle ">RW-156  </td>
            <td className="align-middle ">Houston  </td>
            <td className="align-middle ">Cell Phones & Accessories   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP5} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Brady Waltz</td>
            <td className="align-middle ">RW-845  </td>
            <td className="align-middle ">Phoenix  </td>
            <td className="align-middle ">Clothing  </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
                </div>
            </td>
        </tr>
        <tr >
            <td className="align-middle ">
                <input type='checkbox'  />
            </td>
            <td className="align-middle ">
                <img src={PersonDP6} alt='...' className="list_photo  " />
            </td>
            <td className="align-middle ">Joseph Gonzales</td>
            <td className="align-middle ">RW-741  </td>
            <td className="align-middle ">Philadelphia  </td>
            <td className="align-middle ">Shoes   </td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                    <Link to='/request-list' className="dropdown-item" >Request List </Link>
                    <Link to='' className="dropdown-item" >Chat</Link>
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










</>
    
    );
}

export default CustomerList  ;