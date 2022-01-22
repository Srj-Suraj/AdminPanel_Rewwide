// libraries
import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import "./index.css";

// components
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import Chatbox from "./Chatbox/Chatbox";
import ClientsList from "./Clients/ClientsList";
import ClientsGrid from "./Clients/ClientsGrid";
import ManufacturerDetails from "./ManufacturerDetails/ManufacturerDetails";
import RequestList from "./RequestList/RequestList";
import ReviewList from "./ReviewList/ReviewList";
import Review from "./Review/Review";
// categories routing
import AllCategory from "./AllCategory/AllCategory";
import AddCategory from "./AddCategory/AddCategory";
import EditCategory from "./EditCategory/EditCategory";
import ViewCategory from "./ViewCategory/ViewCategory";
// product routing
import ProductList from "./ProductList/ProductList";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";
import ViewProduct from "./ViewProduct/ViewProduct";

import Account from "./Account/Account";
import ProfileSetting from "./profileSetting/ProfileSetting";
import HelpSupport from "./HelpSupport/HelpSupport";
import Subscription from "./Subscription/Subscription";
import Dashboard from "./Dashboard/Dashboard";
import ErrorPage from "./ErrorPage";

reactDom.render(
  
  <>

    <Router basename="/">
        <SideBar /> <NavBar /> 
      <Routes>
        
        <Route path="/" element={<><SideBar /> <NavBar /> <Dashboard />  </>} />
        <Route path="/chatbox" element={<><SideBar />  <NavBar /><Chatbox /> </>} />
        <Route path="/clients-list" element={<><SideBar />  <NavBar /><ClientsList /> </>} />
        <Route path="/clients-grid" element={<><SideBar />  <NavBar /><ClientsGrid /> </>} />
        <Route path="/manufacturer-details" element={<><SideBar />  <NavBar /><ManufacturerDetails /> </>} />
        <Route path="/request-list" element={<><SideBar />  <NavBar /><RequestList /> </>} />

        <Route path="/review-list" element={<><SideBar />  <NavBar /><ReviewList /> </>} />
        <Route path="/review" element={<><SideBar />  <NavBar /><Review /> </>} />

        <Route path="/all-category" element={<><SideBar />  <NavBar /><AllCategory /> </>} />
        <Route path="/add-category" element={<><SideBar />  <NavBar /><AddCategory /> </>} />
        <Route path="/edit-category" element={<><SideBar />  <NavBar /><EditCategory /> </>} />
        <Route path="/view-category" element={<><SideBar />  <NavBar /><ViewCategory /> </>} />

        <Route path="/product-list" element={<><SideBar />  <NavBar /><ProductList /> </>} />
        <Route path="/add-product" element={<><SideBar />  <NavBar /><AddProduct /> </>} />
        <Route path="/edit-product" element={<><SideBar />  <NavBar /><EditProduct /> </>} />
        <Route path="/view-product" element={<><SideBar />  <NavBar /><ViewProduct /> </>} />

        <Route path="/profile-setting" element={<><SideBar />  <NavBar /><ProfileSetting /> </>} />
        <Route path="/account" element={<><SideBar />  <NavBar /><Account /> </>} />
        <Route path="/help-support" element={<><SideBar />  <NavBar /><HelpSupport /> </>} />
        <Route path="/subscription" element={<><SideBar />  <NavBar /><Subscription /> </>} />
        <Route path="/dashboard" element={<><SideBar />  <NavBar /><Dashboard /> </>} />


        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>
  
 
  , document.getElementById("root")
);
