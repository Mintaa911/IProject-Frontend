import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MenuItem({
  menuTag,
  menuTitle,
  menuDescription,
  menuBackgroundColor,
  menuLink,
  menuIconName,

}) {
  return (
    <div>
      <div className={"relative flex flex-col min-w-0 break-words rounded-b mb-6 xl:mb-0 shadow-lg " + menuBackgroundColor}>
        <div className="flex-auto px-4 pt-4 pb-2">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <div className='flex-row'>
                <h5 className="text-white uppercase font-bold text-xs inline-flex">
                  {menuTag}
                              </h5>
              </div>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg "
                }
              >
                <img
                            alt="..."
                            src={require("assets/img/" + menuIconName).default}
                            className="inline-block max-w-25-px"
                        />
              </div>
            </div>
          </div>
          <div className="relative pr-4 mt-5 mb-3 flex-grow flex-1">
            <div className='flex-row bg-blueGray-op rounded-lg w-f'>
              <h5 className="text-white uppercase text-xs inline-flex">
                {menuDescription}
                              </h5>
            </div>

            <span className="font-semibold text-xl text-white inline-flex max-w-min">
              {menuTitle}
                            </span>
          </div>


          <p className="text-sm text-white mt-4">
            <div className='flex-row justify-end ml-auto mt-1 w-f'>
              <h5 className="text-white uppercase text-xs inline-flex mr-1">
                SEE MORE
                              </h5>
              
              <Link
            to={menuLink}
          >
            <i class="fas fa-arrow-circle-right"></i>
          </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

MenuItem.defaultProps = {
  menuIconName: "far fa-chart-bar",
  menuIconColor: "bg-red-500",
};

MenuItem.propTypes = {
  menuIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  menuIconColor: PropTypes.string,
};
