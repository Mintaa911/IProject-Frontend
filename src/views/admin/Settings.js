import React, { Component } from 'react'

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default class Settings extends Component {

  render(){
  const username = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12">
          <CardSettings 
          
            name = {username}
            email = {email}
        />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
  }
}
