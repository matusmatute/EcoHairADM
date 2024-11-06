import React from 'react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <button>Notifications</button>
        <button>User Profile</button>
      </div>
    </header>
  );
};

export default Navbar;
