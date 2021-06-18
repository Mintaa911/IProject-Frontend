import React from "react";
import PropTypes from "prop-types";

export default function MenuOverall({
  menuTitle,
  menuDescription,
  menuBackgroundColor,
  menuIconName,

}) {
  return (
    <div className="h-full">
      <div className={"relative flex flex-col min-w-0 break-words rounded-b bg-lightBlue-900 mb-6 xl:mb-0 shadow-lg h-full" + menuBackgroundColor}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-1/2 pr-4 pt-1 max-w-full flex-grow flex-1">
              <div className='flex-row pt-12'>
                <h5 className="text-white uppercase inline-flex text-xl">
                  {menuTitle}
                </h5>
              </div>
              <div className='flex-row pt-12'>
                <span className="text-xs text-white">
                  ETB <span className="text-xl text-white font-bold">
                    {menuDescription}
                  </span>
                </span>
              </div>

            </div>
            <div className="relative w-1/2 pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-full h-full shadow-lg "

                }
              >
                <img
                  alt="..."
                  src={require("assets/img/" + menuIconName).default}
                  className="inline-block w-8/12"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

MenuOverall.defaultProps = {
  menuIconName: "far fa-chart-bar",
  menuIconColor: "bg-red-500",
};

MenuOverall.propTypes = {
  menuIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  menuIconColor: PropTypes.string,
};
