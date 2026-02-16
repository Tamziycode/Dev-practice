import React from "react";
import { LayoutGrid, Calendar, CheckCircle2, Settings } from "lucide-react";

const NavItem = ({ icon, label, active }) => {
  return (
    <li className={`nav-item ${active ? "active" : ""}`}>
      {icon}
      <span>{label}</span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="nav-list">
        <NavItem icon={<LayoutGrid size={24} />} label="All Tasks" active />
        <NavItem icon={<Calendar size={24} />} label="Today" />
        <NavItem icon={<CheckCircle2 size={24} />} label="Completed" />
        <NavItem icon={<Settings size={24} />} label="Settings" />
      </div>
    </nav>
  );
};

export default Sidebar;
