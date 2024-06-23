'use client'
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Add Text</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Aspect Ratio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white" aria-current="page">Add Text</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Aspect Ratio</a>
        </div>
      </div>
    </nav>
  )
}