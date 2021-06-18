import React, { Component } from 'react'
import axios from 'axios'

// components

import CardRepaymentHistory from "components/Cards/CardRepaymentHistory.js";
import CardReviewHistory from "components/Cards/CardReviewHistory.js";
import CardStudentLoan from "components/Cards/CardStudentLoan.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

async function getProject(id){
  try{
    let res = await axios.get(`https://iproject-api.herokuapp.com/projects/${id}`, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Access-Token" : localStorage.getItem('token')
      }
    }
    )
    return res
  }
  catch(err){
    console.log(err)
  }

}
async function finishProject(id){
  try{
    let token = localStorage.getItem('token')
    let res = await axios.put(`https://iproject-api.herokuapp.com/work/end/${id}`,
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
    state = {
      student_id: '',
      student_name: '',
      student_email: '',
      student_batch: '',
      student_verified: '',
      institution_id: '',
      projects: '',
      ongoing: [],
      pays: [],
      ratings: []
    }
    count = 0
    proje = []

  
    render() {

      localStorage.setItem('projects', '[]')
      const data = JSON.parse(localStorage.getItem('detail'))
      console.log(data)
      this.count = data.works.length
      this.state.student_batch = data.batch
      this.state.student_email = data.email
      this.state.student_name = data.name 
      this.state.student_id = data.student_id
      this.state.institution_id = data.institution_id
      this.state.student_verified = data.verified
      this.state.projects = data.works

      this.proje = data.works
      console.log(this.proje)
      let menuItems = [];
    for (var i = 0; i < this.proje.length; i++) {
        menuItems.push(<CardStudentLoan project_id={this.proje[i].id} start_date={this.proje[i].start_date} />);
    }

      
      for (let index = 0; index < this.state.projects.length; index++) {
          const element = this.state.projects[index];
          if(element.pays.date){
            console.log(element.pays)
            this.state.pays.push(element.pays)
            console.log(this.state.pays)
          }
          if(element.ratings.length > 0){
            this.state.ratings.push(element.ratings)
          }
          if(element.finished){
            getProject(element.id).then(res => {
              let proj = JSON.parse(localStorage.getItem('projects'))
              proj.push(res.data.data[0])
              
              console.log(res)
              localStorage.setItem('projects', JSON.stringify(proj))
              this.state.ongoing = localStorage.getItem('projects')
            }).catch(err => console.log(err))
          }
          
        }
      // this.state.ongoing = Object.values(this.state.ongoing)


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
        
                          {this.count}
                        </h1>
                      </div>
        
                    </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                    {menuItems}
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
        
                        {this.state.pays.length}
                        </h1>
                      </div>
        
                    </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
                    <CardRepaymentHistory />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
                    <CardReviewHistory />
                  </div>
                </div>
              </div>
              
            </>
          );
        }
  }