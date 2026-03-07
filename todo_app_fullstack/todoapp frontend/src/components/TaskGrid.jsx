import React from "react";
import TaskCard from "./TaskCard";

const TaskGrid = ({ tasks, onToggleComplete }) => {
  if (tasks.length === 0) {
    return <p>No tasks found. Take a break!</p>;
  }

  return (
    <div className="task-grid">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          isSelected={index === 0} // Highlights the first one like your design
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskGrid;
