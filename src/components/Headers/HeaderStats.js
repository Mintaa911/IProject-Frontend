import React from "react";

// components
import MenuItem from "components/Cards/MenuItems.js";
import MenuOverall from "components/Cards/MenuOverall";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative pb-16 pt-20">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className='flex flex-wrap'>
              <div className="w-8/12 px-4">
                <div className='border-yellow w-f mb-8'>
                  <h4 className="mb-4 uppercase font-bold text-lg">Projects & Assignemnts</h4>
                </div>
              </div>
              <div className="w-4/12 px-4">
                <button
                  className="hovery-blue text-black bg-white text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >

                  Statement Download
                </button>
              </div>

            </div>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="w-4/12 px-4">
                  <MenuItem
                    menuTag="CHECK"
                    menuTitle="STUDENT PROGRESS"
                    menuDescription="INSTANT PROJECT"
                    menuBackgroundColor='bg-lightBlue-700'
                    menuLink='forms'
                    menuIconName='loan.png'
                  />
                </div>
                <div className="w-4/12 px-4">
                  <MenuItem
                    menuTag="MATCH"
                    menuTitle="PROJECT COLLECTIONS"
                    menuDescription="BROWSE"
                    menuBackgroundColor='bg-pink-500 bg-loan'
                    menuLink='projects'
                    menuIconName='scholarship.png'
                  />
                </div>
                <div className="w-8/12 px-4 flex-1">
                  <MenuOverall
                    menuTitle="Total Earned"
                    menuDescription="85,603.00 "
                    menuBackgroundColor='bg-lightBlue-9S00'
                    menuIconName='chart.png'
                  />
                </div>
              </div>
            </div>{/* Card stats */}
          </div>
        </div>
      </div>
    </>
  );
}
