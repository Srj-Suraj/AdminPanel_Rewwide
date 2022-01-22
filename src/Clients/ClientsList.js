
import "./clientsList.css";
import CustomerList from "./CustomerList";
import ManufacturerList from './ManufacturerList';
import RetailerList from "./RetailerList";
import StockistList from "./StockistList";

import {Link} from 'react-router-dom'; 





function Clients(){
return(<>
    
<div className="container" >

<div className="row col-md-12 "> 
<div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
  <Link to='/clients-list' className="btn btn-primary active">
    <input type="radio" name="options" id="option1"  /> 
    <i className="fa fa-list"/>
  </Link>
  <Link to='/clients-grid' className="btn btn-primary ">
    <input type="radio" name="options" id="option2" /> 
    <i className="fa fa-th" />
  </Link>  
</div>
</div>


{/* tab navigation */}
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-link active" id="nav-Manufacturer-tab" data-toggle="tab" href="#nav-Manufacturer" role="tab" aria-controls="nav-Manufacturer" aria-selected="true">Manufacturer</a>
    <a className="nav-link" id="nav-Stockist-tab" data-toggle="tab" href="#nav-Stockist" role="tab" aria-controls="nav-Stockist" aria-selected="false">Stockist</a>
    <a className="nav-link" id="nav-Retailer-tab" data-toggle="tab" href="#nav-Retailer" role="tab" aria-controls="nav-Retailer" aria-selected="false">Retailer</a>
    <a className="nav-link" id="nav-Customer-tab" data-toggle="tab" href="#nav-Customer" role="tab" aria-controls="nav-Customer" aria-selected="false">Customer</a>
  </div>
</nav>

<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active card shadow" id="nav-Manufacturer" role="tabpanel" aria-labelledby="nav-Manufacturer-tab">
      <ManufacturerList />
  </div>
  <div className="tab-pane fade card shadow" id="nav-Stockist" role="tabpanel" aria-labelledby="nav-Stockist-tab">
      <StockistList/>
  </div>
  <div className="tab-pane fade card shadow" id="nav-Retailer" role="tabpanel" aria-labelledby="nav-Retailer-tab">
      <RetailerList />
  </div>
  <div className="tab-pane fade card shadow" id="nav-Customer" role="tabpanel" aria-labelledby="nav-Customer-tab">
      <CustomerList />
  </div>
</div>









</div>

</>)
}

export default  Clients;