import React from 'react';
import Sidebar from '../Sidebar/SideBar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
