import React, { Component } from 'react'

// components

import CardRepaymentHistory from "components/Cards/CardRepaymentHistory.js";
import CardStudentLoan from "components/Cards/CardStudentLoan.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


export default class TeacherDashboard extends Component {
    state = {
      teacher_id: '',
      teacher_name: '',
      teacher_email: '',
      teacher_verified: '',
      institution_id: ''
    }
  
    render() {
      return (
            <>     
              
              <AdminNavbar />
              {/* Header */}
              <div pt-5>Dashboard</div>
              <HeaderStats />
              <div className="relative px-4 md:px-10 mx-auto w-full">
              <div className='flex flex-wrap'>
                      <div className="w-8/12 px-4">
                        <div className='w-f mb-8'>
                          <h4 className="mb-4 uppercase font-bold text-lg">Ongoing Projects</h4>
                        </div>
                      </div>
                      <div className="w-4/12 px-4 lg:ml-24">
                        <h1
                          className="bg-blue-50 text-black text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                        >
        
                          2
                        </h1>
                      </div>
        
                    </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                    <CardStudentLoan />
                  </div>
                  <div className="w-full xl:w-6/12 px-4">
                    <CardStudentLoan />
                  </div>
                </div>
              </div>
              <div className="relative px-4 md:px-10 mx-auto w-full">
              <div className='flex flex-wrap'>
                      <div className="w-8/12 px-4">
                        <div className=' w-f mb-8'>
                          <h4 className="mb-4 uppercase font-bold text-lg">Payment History</h4>
                        </div>
                      </div>
                      <div className="w-4/12 px-4 lg:ml-24">
                        <h1
                          className="text-black bg-blue-50 text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          
                        >
        
                          2
                        </h1>
                      </div>
        
                    </div>
              </div>
            </>
          );
        }
  }