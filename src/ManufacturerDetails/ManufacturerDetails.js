import React from 'react';
import {Link} from 'react-router-dom';

// css
import './manufacturerDetails.css';

// img
import img1 from '../img/dp-1.jpg';

function ManufacturerDetails(){
    return(
        <>
<div className="container" >

<div className='row '>
<h5 className="btn table-title">Manufacturer Details</h5>
</div>



<div className="row">
{/*  profile section  */}
<div className='col-md-6 p-3'>
    <div className="col-md-12 box p-4  shadow d-flex">
        {/* left side  */}
        <div className="col-md-3  manuf-card2 ">
            <img src={img1} alt='...' className='list-dp mb-3'/>
            <b className="mt-3 mb-0">User Id</b>
            <p className="id m-0">RWE-78</p>
        </div>

        {/* mid  */}
        <div className="col-md-4 ml-3 ">
            <p className="textHead mt-3">Name</p>
            <p className="text">Ryan Reynolds</p>

            <p className="textHead mt-3">Vat/GST no.</p>
            <p className="text">123456789</p>

            <p className="textHead mt-3">Region</p>
            <p className="text">Canda</p>

            <p className="textHead mt-3">Total Sales</p>
            <p className="text">1522</p>
        </div>

        {/* right side */}
        <div className="col-md-4  ">
            <p className="textHead mt-3">Date of birth</p>
            <p className="text">13-03-2002</p>

            <p className="textHead mt-3">CIN no.</p>
            <p className="text">147258369</p>

            <p className="textHead mt-3">City</p>
            <p className="text">Toronto</p>

            <p className="textHead mt-3">Total transaction</p>
            <p className="text">$450</p>


        </div>
    </div>
</div>

{/* Top Product sales  */}
<div className='col-md-6 p-3'>
        <div className="col-md-12 box  p-1  shadow ">
        <p className="textHead mt-3 ml-2">Top Product sales</p>
        
        <table className="table table-hover">
                <thead>
                    <tr className='table-borderless'>
                        <th scope="col">Region</th>
                        <th scope="col">Category</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sale%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle ">New York</td>
                        <td className="align-middle ">Appliances </td>
                        <td className="align-middle ">LG AC</td>
                        <td className="align-middle ">34</td>
                        <td className="align-middle ">23</td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Los Angeles</td>
                        <td className="align-middle ">Baby Product</td>
                        <td className="align-middle ">Skin Powder</td>
                        <td className="align-middle ">24</td>
                        <td className="align-middle ">79</td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Chicago</td>
                        <td className="align-middle ">Books</td>
                        <td className="align-middle ">How to Crack Puzzle</td>
                        <td className="align-middle ">67</td>
                        <td className="align-middle ">68</td>
                    </tr>
                    <tr>
                        <td className="align-middle ">Houston</td>
                        <td className="align-middle ">Clothing</td>
                        <td className="align-middle ">T-Shirt</td>
                        <td className="align-middle ">87</td>
                        <td className="align-middle ">43</td>
                    </tr>
                   
                  

                </tbody>
            </table>
        </div>
</div>

{/* Request status  */}
<div className='col-md-12 p-3'>
<div className="col-md-12 box  mt-3 p-4 shadow ">
<p className="table-title mt-3">Request status</p>

<table className="table table-hover mr-5 Request-tbl">
        <thead >
            <tr className='table-borderless'>
                <th scope="col">Region</th>
                <th scope="col">Category</th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="align-middle "> Chicago </td>
                <td className="align-middle "> Books </td>
                <td className="align-middle "> Creack Puzzle</td>
                <td className="align-middle ">  $50</td>
                <td className="align-middle "> Draft </td>
                <td className="align-middle ">
                    <Link to='/review' > <i className="fa fa-ellipsis-h" /> </Link>
                </td>
            </tr>
            <tr>
                <td className="align-middle "> New York </td>
                <td className="align-middle "> Electronics </td>
                <td className="align-middle "> Asus Dekstop </td>
                <td className="align-middle "> $752 </td>
                <td className="align-middle "> Draft </td>
                <td className="align-middle ">
                    <Link to='/review' > <i className="fa fa-ellipsis-h" /> </Link>
                </td>
            </tr>
            <tr>
                <td className="align-middle "> New York </td>
                <td className="align-middle "> Electronics </td>
                <td className="align-middle "> IPad 5 pro </td>
                <td className="align-middle "> $634 </td>
                <td className="align-middle "> Draft </td>
                <td className="align-middle ">
                    <Link to='/review' > <i className="fa fa-ellipsis-h" /> </Link>
                </td>
            </tr>
            

        </tbody>
    </table>
</div>
</div>

</div>

</div>
</>
    );
}

export default  ManufacturerDetails ;
