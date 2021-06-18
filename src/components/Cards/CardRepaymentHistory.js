import React from "react";

// components

export default function CardRepaymentHistory() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center border-b">
            <div className="relative w-12 px-4 max-w-full flex-5">
              <h3 className="font-semibold text-base text-blueGray-700">
                Date
              </h3>
            </div>
            <div className="relative w-1/2 px-4 max-w-full flex-5">
              <h3 className="font-semibold text-base text-blueGray-700">
                Company
              </h3>
            </div>
            <div className="relative w-1/2 px-4 max-w-full flex-5">
              <h3 className="font-semibold text-base text-blueGray-700">
                Amount
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            
            <tbody>
              <tr>
                <th className="border-t-0 px-6 text-dark-green align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  08, MAR
                </th>
                <td className="border-t-0 w-30p px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap">
                  <div className="text-center">
                    Knovuslab
                  </div>
                </td>
                <td className="border-t-0 w-30p px-6 align-left border-l-0 border-r-0 text-xs whitespace-nowrap">
                  <div className="text-center uppercase">
                  ETB 2100
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 text-dark-green align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  08, MAR
                </th>
                <td className="border-t-0 w-30p px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap">
                  <div className="text-center">
                    Knovuslab
                  </div>
                </td>
                <td className="border-t-0 w-30p px-6 align-left border-l-0 border-r-0 text-xs whitespace-nowrap">
                  <div className="text-center uppercase">
                  ETB 2100
                  </div>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </>
  
  );
}
