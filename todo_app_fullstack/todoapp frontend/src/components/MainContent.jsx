import React from "react";
import TopHeader from "./TopHeader";
import PageHeader from "./PageHeader";
import TaskGrid from "./TaskGrid";
import Fab from "./Fab";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="header-section">
        <TopHeader />
        <PageHeader />
      </div>
      <TaskGrid />
      <Fab />
    </main>
  );
};

export default MainContent;
