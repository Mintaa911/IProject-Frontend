import React,{Component} from "react";
import { Link } from "react-router-dom";
import Role from './role'

import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/styles/register.css";

import axios from 'axios'

const initialState = {
  class_name:"student",
  name:'',
  email:'',
  batch:'',
  stud_id:'',
  institution_id:'',
  location:'',
  password:'',
  confirm_password:''
}
export default class Register extends Component {
  state = {
    class_name:"student",
    name:'',
    email:'',
    batch:'',
    stud_id:'',
    institution_id:'',
    location:'',
    password:'',
    confirm_password:''
  
  }
  handleRole = (classname)=>{
      this.setState({
        class_name: classname
      });
  };
  registerUser = async (formData)=>{
      const url ='';
      try {
        let res = await axios.post(url,formData);
        return res;
      } catch (error) {
        
      }
  }
  inputChangeHandler = event=>{
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubimt = event =>{
      event.preventDefault();
   
      const formData = new FormData();
      if(this.state.password !== this.state.confirm_password){
        return alert(this.state.password, this.state.confirm_password);
      }
      if( this.state.batch !== "" && this.state.batch < 1) return alert("Batch number should be above zero")
      formData.append("name",this.state.name);
      formData.append("email",this.state.email);
      formData.append("batch",this.state.batch);
      formData.append("stud_id",this.state.stud_id);
      formData.append("institution",this.state.institution_id);
      formData.append("location",this.state.location);
      formData.append("password",this.state.password);
      for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
      initialState.class_name = this.state.class_name;
      this.setState(initialState);
  }

  render(){
    return (
      <>
        <div className=" mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                
                <Role
                  onRoleChange={this.handleRole}
                />
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center my-3 font-bold">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign Up
                    </h6>     
                  </div>
                  <form className={`${this.state.class_name}`} onSubmit={this.handleSubimt}>
                    <div className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.inputChangeHandler}
                      />
                    </div>

                    <div className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        required
                        onChange={this.inputChangeHandler}
                      />
                    </div>
                    <div className="row">

                    
                      <div id="batch" className={`relative w-full mb-3 col-6`}>
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Batch
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Batch"
                          name="batch"
                          value={this.state.batch}
                          // required
                          onChange={this.inputChangeHandler}
                        />
                      </div>
                      <div id="stud_id" className={`relative w-full mb-3 col-6`}>
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Student ID
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Student Id"
                          name="stud_id"
                          value={this.state.stud_id}
                          // required
                          onChange={this.inputChangeHandler}
                        />
                      </div>
                    </div>
                    <div id="location" className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Location"
                        name="location"
                        value={this.state.location}
                        // required
                        onChange={this.inputChangeHandler}
                      />
                    </div>
                    <div id="institution_id" className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Institution ID
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Institution Id"
                        name="institution_id"
                        value={this.state.institution_id}
                        // required
                        onChange={this.inputChangeHandler}
                      />
                    </div>
                    
                    <div className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        required
                        onChange={this.inputChangeHandler}
                      />
                    </div>
                    <div className={`relative w-full mb-3`}>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Confirm password"
                        name="confirm_password"
                        value={this.state.confirm_password}
                        required
                        onChange={this.inputChangeHandler}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                      <Link to="/admin/dashboard">
                        
                        </Link>
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                
                <div className="text-right">
                  <Link to="/auth/login" className="text-blueGray-200">
                    <small>Already have an account?</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
