import React from "react";
import { Search, ScanLine } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="top-header flex-between">
      <div className="search-bar-container">
        <Search className="search-icon" size={20} />
        <input type="text" placeholder="Search" className="search-input" />
        <ScanLine
          size={20}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--text-muted)",
          }}
        />
      </div>
      <div className="avatar">
        {/* Placeholder image based on the mockup */}
        <img src="https://i.pravatar.cc/150?img=7" alt="Profile" />
      </div>
    </header>
  );
};

export default TopHeader;
