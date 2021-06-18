import React, { Component } from 'react'

import axios from 'axios'
import PropTypes from "prop-types";
import ObjectRow from "components/Cards/ObjectRow.js";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

async function startProject(id){
  try{
    let token = localStorage.getItem('token')
    let res = await axios.post(`https://iproject-api.herokuapp.com/works/`, id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-Access-Token" : token
        }
      }
      )
      return res.data.data
    
  }
  catch(err){
    console.log(err)
  }

}
export default class StudentDashboard extends Component {
  proje = []
  render() {
  this.proje = JSON.parse(localStorage.getItem('allProjects'))
  let menuItems = [];
  for (var i = 0; i < this.proje.length; i++) {
      menuItems.push(<ObjectRow 
        active={true}
        deadline= {this.proje[i].deadline} 
        description= {this.proje[i].description}
        price={this.proje[i].price} 
        technologies={this.proje[i].technologies}
        title={this.proje[i].title} 
        />);
  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-700 text-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg text-white"
                }
              >
                Projects
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                   "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Project
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {/* { projects.map((object, i) => <ObjectRow obj={object} key={i} />)} */}
              {menuItems}
              </tbody>
          </table>
        </div>
      </div>
    </>
  );
                  }
}

