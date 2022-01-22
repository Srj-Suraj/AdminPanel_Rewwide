import React from 'react';
import {Link} from 'react-router-dom';
import StockistSaleChart from './StockistSaleChart';
import ManufacturerChart from './ManufacturerChart';
import TotalSaleChart from './TotalSaleChart';
import TopClientChart from './TopClientChart';
import RetailerChart from './RetailerChart';
import TransactionsChart from './TransactionsChart';

// css
import './Dashboard.css';

// img
// import img1 from '../img/dp-1.jpg';

function Dashboard(){
    return(
<>
<div className="container" >
<div className='row'>
{/* chart1 */}
<div className='col-md-8 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12'>
            <h5 className='mr-auto'>Manufacturers Sales</h5>
            <Link to='/clients-grid' className="text-primary mr-3" >More</Link>
            <div className="dropdown">
                <div className="dropdown-toggle text-primary " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
            <select className='form-control'>
                <option value='1'>Weekly</option>
                <option value='1'>Monthly</option>
                <option value='1'>Yearly</option>
            </select>
        </div>
        {/* Chart */}
        <div className='col-md-12 mt-3 p-4'>
        <ManufacturerChart />
        </div>
</div>
</div> 

{/* chart2 */}
<div className='col-md-4 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12'>
            <h5 className='mr-auto'>Total sale</h5>
            
            <div className="dropdown">
                <div className="dropdown-toggle text-primary " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
        </div>

        {/* Chart */}
        <div className='col-md-12 p-2 mt-4'>
            <TotalSaleChart />
        </div>

</div>
</div>

{/* chart3 */}
<div className='col-md-8 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12'>
            <h5 className='mr-auto'>Stockist Sale</h5>
            
            <div className="dropdown d-flex">
                
                <div className="dropdown-toggle text-primary mr-3" type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Office Product
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Electronic</Link>
                    <Link to='' className="dropdown-item" >Grocery </Link>
                    <Link to='' className="dropdown-item" >Kitchen</Link>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-toggle text-primary " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
        </div>
        {/* Chart */}
        <div className='mx-auto col-md-12 p-3 mt-3'>
            <StockistSaleChart />
        </div>
</div>
</div>

{/* chart4 */}
<div className='col-md-4 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12'>
            <h5 className='mr-auto'>Top Clients</h5>
            <Link to='/clients-grid' className="text-primary mr-3" >More</Link>
            <div className="dropdown">
                <div className="dropdown-toggle text-primary " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
        </div>
        {/* Chart */}
        <div className='  mt-4'>
            <TopClientChart />
        </div>
</div>
</div>

{/* chart5 */}
<div className='col-md-8 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12'>
            <h5 className='mr-auto'>Retailer Sales</h5>
            {/* product dropdown  */}
            <div className="dropdown">
                <div className="dropdown-toggle text-primary mr-3 " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Electronics
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Electronics</Link>
                    <Link to='' className="dropdown-item" >Books</Link>
                    <Link to='' className="dropdown-item" >Cloth</Link>
                </div>
            </div>
            {/* time frame drop down */}
            <div className="dropdown">
                <div className="dropdown-toggle text-primary " type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
        </div>
        {/* Chart */}
        <div className='col-md-12 mt-3 p-4'>
        <RetailerChart />
        </div>
</div>
</div> 

{/* chart6 */}
<div className='col-md-4 p-3'>
<div className='col-md-12 box shadow p-3  chart-box '>
        <div className='chart-title col-md-12 m-0  px-3'>
            <h5 className='mr-auto '>Total Transactions</h5>
           {/* time frame  */}
            <div className="dropdown">
                <div className="dropdown-toggle text-primary mr-3" type='button'  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >Weekly</Link>
                    <Link to='' className="dropdown-item" >Monthly</Link>
                    <Link to='' className="dropdown-item" >Yearly</Link>
                </div>
            </div>
            {/* <Link to='' className="fa fa-expand btn shadow-0 p-0 "  /> */}
        </div>
        {/* Chart */}
        <div className='  mt-4'>
            <TransactionsChart />
        </div>
</div>
</div>


</div>
</div>
</>
    );
}

export default Dashboard  ;

