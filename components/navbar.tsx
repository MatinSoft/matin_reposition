'use client'
import React from "react";
import { DropDown } from "./ui/dropDown";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex sm:h-16 items-center justify-between">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <button className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white active:bg-gray-700/60" >Add Text</button>

                <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio"
                  className="drop-shadow-sm dropdown-menu rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white  active:bg-gray-700/60  text-center inline-flex items-center">
                  Aspect Ratio
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownDefaultRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden h-[88px]" id="mobile-menu">
        <button className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white  active:bg-gray-700/60">Add Text</button>
        <button className="mb-7 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-700/60">Aspect Ratio</button>
      </div>
    </nav>
  )
}