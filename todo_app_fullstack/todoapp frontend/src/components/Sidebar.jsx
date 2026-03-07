import React from "react";
import { LayoutGrid, Calendar, CheckCircle2 } from "lucide-react"; // Removed Settings import

const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <li
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

const Sidebar = ({ activeFilter, setActiveFilter }) => {
  return (
    <nav className="sidebar">
      <div className="nav-list">
        <NavItem
          icon={<LayoutGrid size={24} />}
          label="All Tasks"
          active={activeFilter === "All Tasks"}
          onClick={() => setActiveFilter("All Tasks")}
        />
        <NavItem
          icon={<Calendar size={24} />}
          label="Today"
          active={activeFilter === "Today"}
          onClick={() => setActiveFilter("Today")}
        />
        <NavItem
          icon={<CheckCircle2 size={24} />}
          label="Completed"
          active={activeFilter === "Completed"}
          onClick={() => setActiveFilter("Completed")}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
