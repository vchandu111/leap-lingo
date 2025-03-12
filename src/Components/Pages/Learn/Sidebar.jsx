import React from 'react';
import { Home, ShoppingBag, User, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen p-6 flex flex-col shadow-sm ">
      {/* Logo */}
     
      
      {/* Navigation Items */}
      <nav className="flex flex-col gap-4">
        <NavItem icon={<Home className="text-blue-400" />} label="LEARN" active link="/learn" />
        <NavItem icon={<ShoppingBag className="text-red-400" />} label="SHOP" link="/shop" />
        <NavItem icon={<User className="text-purple-400" />} label="PROFILE" link="/profile" />
      </nav>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, label, active = false, link }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(link)} className={`flex items-center gap-4 p-4 rounded-xl transition-colors cursor-pointer ${active ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
      <div className="w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
      <span className={`text-md font-medium text-black`}>
        {label}
      </span>
    </div>
  );
};

export default Sidebar;