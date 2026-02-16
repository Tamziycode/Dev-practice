import React from "react";
import { ChevronDown } from "lucide-react";

const CategoryPill = ({ label, variant }) => (
  <div className={`category-pill pill-${variant}`}>
    <div className="pill-dot"></div>
    {label}
  </div>
);

const PageHeader = () => {
  return (
    <div className="page-header flex-between">
      <h1 className="page-title">All Tasks</h1>
      <div className="controls-area flex-center">
        <div className="filters-btn flex-center">
          Filters <ChevronDown size={18} />
        </div>
        <div className="tags-container flex-center">
          <CategoryPill label="Work" variant="blue" />
          <CategoryPill label="Personal" variant="orange" />
          <CategoryPill label="Projects" variant="purple" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
