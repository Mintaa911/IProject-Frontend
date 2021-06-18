import React, { Component } from 'react'
    
export default function CardStudentLoan({
  start_date

}) {
  return (

      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center border-b">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                Comp
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a
                  className="text-green text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Active
                </a>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              
              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  Project Title
                  </th>
                  <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="text-right">
                    Technologies used
                    </div>
                  </td>
                </tr>
                <tr>
                  
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    Teacher's name
                  </th>
                  <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="text-right text-xs">
                    {start_date}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <a>ETB 10,000.00</a>
                  </th>
                  <td className="border-t-0 px-6 text-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button
                    className="bg-blue-200 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                  <a className="text-blueGray-200">
                    
                  Finish
                  </a>
                  </button>
                  </td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
