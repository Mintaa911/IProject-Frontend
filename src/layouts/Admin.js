import { Switch, Route, Redirect } from "react-router-dom";

// components
import React, { Component } from 'react'
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

// import Dashboard from "views/admin/Dashboard.js";

import CompanyDashboard from "views/admin/CompanyDashboard.js";
import AdminDashboard from "views/admin/AdminDashboard.js";
import StudentDashboard from "views/admin/StudentDashboard.js";
import TeacherDashboard from "views/admin/TeacherDashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";


export default class Admin extends Component {

  render(){
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')

    return (
      <>
        <Sidebar 
        name = {name}
        email = {email}
        />
        <div className="relative md:ml-64 bg-blueGray-100">
          
          <div className="mx-auto w-full m-24">
            <Switch>
              {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
  
              <Route path="/admin/companydashboard" exact component={CompanyDashboard} />
              <Route path="/admin/studentdashboard" exact component={StudentDashboard} />
              <Route path="/admin/dashboard" exact component={AdminDashboard} />
              <Route path="/admin/teacherdashboard" exact component={TeacherDashboard} />
              <Route path="/admin/projects" exact component={Tables} />
              <Route path="/admin/maps" exact component={Maps} />
              <Route path="/admin/settings" exact component={Settings} />
              <Route path="/admin/tables" exact component={Tables} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
  
}

