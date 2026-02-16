import React from "react";
import TaskCard from "./TaskCard";

// Dummy data matching the image roughly
const tasksData = [
  {
    id: 1,
    title: "Design System Update",
    dueDate: "Oct 26",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Client Meeting Notes",
    dueDate: "Oct 27",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Design System Update",
    dueDate: "Oct 26",
    priority: "Medium",
    completed: false,
  },
  {
    id: 4,
    title: "Design Meeting Notes",
    dueDate: "Oct 27",
    priority: "Medium",
    completed: false,
  },
  {
    id: 5,
    title: "Client Meeting Update",
    dueDate: "Oct 28",
    priority: "Medium",
    completed: false,
  },
  {
    id: 6,
    title: "Design Fundant Update",
    dueDate: "Oct 31",
    priority: "High",
    completed: false,
  },
  // ... add more tasks
];

const TaskGrid = () => {
  return (
    <div className="task-grid">
      {/* Manually setting the first one as selected to match the image */}
      <TaskCard task={tasksData[0]} isSelected={true} />
      {tasksData.slice(1).map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskGrid;
