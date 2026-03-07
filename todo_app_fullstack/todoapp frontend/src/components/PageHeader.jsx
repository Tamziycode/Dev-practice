import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      {/* Just a clean, simple title that updates when you click the Sidebar */}
      <h1 className="page-title">{title || "All Tasks"}</h1>
    </div>
  );
};

export default PageHeader;
