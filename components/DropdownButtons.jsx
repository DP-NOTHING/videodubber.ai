"use client"
import { useState } from 'react';
import Link from 'next/link';

function DropdownButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left lg:hidden select-none">
      <div className="inline-flex">
        <button type="button" className="w-full justify-center gap-x-1.5 rounded-md bg-white py-2 font-semibold hover:bg-gray-10" id="menu-button" aria-label="Menu Button Toggler" aria-expanded="true" aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
          <svg className="-mr-1 h-6 w-6 text-gray-400" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div id="menu_1" className="select-none absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <Link href="/"><a className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Home</a></Link>
            <Link href="/pricing/"><a className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Pricing</a></Link>
            <Link href="/blogs/"><a className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Blogs</a></Link>
            <Link href="/about/"><a className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">About</a></Link>
            <p onClick={() => window.location.href='/login'} className="hover:bg-gray-100 text-green-700 block px-4 py-2 text-sm border-t-2 border-gray-100" role="menuitem" tabIndex="-1" id="menu-item-4">Log In</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownButtons;