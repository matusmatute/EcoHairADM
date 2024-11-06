import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Sidebar = () => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-700">
      {/* Header */}
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-4">
        <div className="flex items-center space-x-4">
          <button type="button" className="text-3xl" onClick={() => setAsideOpen(!asideOpen)}>
            <i className="bx bx-menu"></i>
          </button>
          <div className="font-bold text-xl">Logo</div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className="h-10 w-10 overflow-hidden rounded-full border border-gray-300"
          >
            <img src="https://plchldr.co/i/40x40?bg=111111" alt="User profile" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-10">
              <div className="flex items-center space-x-3 p-4">
                <img src="https://plchldr.co/i/40x40?bg=111111" alt="User avatar" className="h-10 w-10 rounded-full" />
                <div className="font-medium">Hafiz Haziq</div>
              </div>
              <div className="p-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              </div>
              <div className="p-2">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <i className="bx bx-log-out"></i>
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {asideOpen && (
          <aside className="w-64 h-screen flex-shrink-0 bg-white border-r border-gray-200 p-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700">
              <i className="bx bx-home text-2xl"></i>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700">
              <i className="bx bx-cart text-2xl"></i>
              <span>Cart</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700">
              <i className="bx bx-shopping-bag text-2xl"></i>
              <span>Shopping</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700">
              <i className="bx bx-heart text-2xl"></i>
              <span>My Favourite</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700">
              <i className="bx bx-user text-2xl"></i>
              <span>Profile</span>
            </a>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-50">
          <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
