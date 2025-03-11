import React from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

// Layout component that contains the common structure
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-4">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>

      <div className="p-4">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
