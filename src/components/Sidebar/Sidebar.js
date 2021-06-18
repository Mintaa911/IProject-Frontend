/*eslint-disable*/
import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import Menu from "components/Headers/Menu.js";

async function callLogout(){
  try{
    let res = await axios.post(`https://iproject-api.herokuapp.com/auth/logout`, 
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
export default function Sidebar({
  name,
  email
}) {
  
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  let address = localStorage.getItem('address');

  const history = useHistory();
  let logout = () => {
    callLogout().then(res => {
      console.log(res)
      localStorage.clear();
    }
    );
    history.push("/auth/login");
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-lightBlue-900  flex flex-wrap items-center justify-between relative md:w-96 z-10 pt-4 pb-0 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-blue-600 m-4 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}

          <Link
            className="bigsc md:block text-4xl lg:self-center md:self-center md:pb-2 text-white mr-0 inline-block mt-2 px-0"
            to={address}
          >
           <img src={require('assets/img/logo.png').default}/>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Heading */}
            <div className="relative lg:self-center md:self-center my-4 sm:hidden">
              <img
                alt="..."
                src={require("assets/img/team-2-800x800.jpg").default}
                className="shadow-xl rounded-full h-auto align-middle border-none max-w-120-px ml-4 md\:hidden"
              />
            </div>
            <div className="text-center mt-1 mb-4">
              <h3 className="text-2xl font-bold leading-normal mb-2 text-white mb-2">
                {name}
                  </h3>
                  <h6 className="text-xs text-white mb-2">
                ({email})
                  </h6>

            </div>
            <div className="container  mx-auto">
              <Menu />
            </div>

            <div className="flex flex-wrap mt-4">
              <div className="w-full px-4">
                <span className="cursor-pointer text-sm block my-4 p-4 text-white text-center ">
                <i class="fas fa-sign-out-alt mr-3"></i><div className="inline-block" onClick={logout}>
                  Logout</div></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
