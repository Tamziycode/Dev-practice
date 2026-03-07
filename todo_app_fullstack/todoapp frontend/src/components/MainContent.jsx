import React, { useState, useEffect } from "react";
import axios from "axios";
import TopHeader from "./TopHeader";
import PageHeader from "./PageHeader";
import TaskGrid from "./TaskGrid";
import Fab from "./Fab";
import Sidebar from "./Sidebar";

const MainContent = () => {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Tasks");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let url = "http://localhost:5000/api/tasks";

    // Modify URL based on sidebar click
    if (activeFilter === "Completed") {
      url += "?status=completed";
    } else if (activeFilter === "Today") {
      url += "?date=today";
    }

    axios
      .get(url)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error))
      .finally(() => setIsLoading(false));
  }, [activeFilter]);

  const handleToggleComplete = async (taskId, currentStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${taskId}/complete`, {
        is_completed: !currentStatus,
      });

      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, is_completed: !currentStatus } : task
        )
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleAddTask = async () => {
    // Pop up boxes for user input
    const taskTitle = window.prompt("What is the new task?");
    if (!taskTitle) return;

    const taskDate = window.prompt("Due date (YYYY-MM-DD):", "2026-03-10");

    try {
      const newTaskData = {
        title: taskTitle,
        priority: "Medium",
        due_date: taskDate || "2026-03-10",
      };

      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        newTaskData
      );

      // Instantly add it to the top of the UI
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <div className="app-layout" style={{ display: "flex" }}>
      <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <main className="main-content" style={{ flex: 1 }}>
        <div className="header-section">
          <div className="center-container">
            <TopHeader />
            <PageHeader title={activeFilter} />
          </div>
        </div>

        <div className="center-container" style={{ paddingBottom: "100px" }}>
          {isLoading ? (
            <p>Loading tasks...</p>
          ) : (
            <TaskGrid tasks={tasks} onToggleComplete={handleToggleComplete} />
          )}
        </div>

        <Fab onAddTask={handleAddTask} />
      </main>
    </div>
  );
};

export default MainContent;
