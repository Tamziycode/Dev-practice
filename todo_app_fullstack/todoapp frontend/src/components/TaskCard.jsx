import React from "react";

const PriorityBadge = ({ level }) => {
  const levelLower = level ? level.toLowerCase() : "medium";
  return (
    <span className={`priority-badge priority-${levelLower}`}>{level}</span>
  );
};

const TaskCard = ({ task, isSelected, onToggleComplete }) => {
  // Format the database string into a readable date (e.g., "Oct 26")
  const formattedDate = new Date(task.due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`task-card ${isSelected ? "selected" : ""}`}>
      <div className="task-header flex-between">
        <div>
          <h3 className="task-title">{task.title}</h3>
          <div className="task-meta">Due: {formattedDate}</div>
        </div>
      </div>

      <PriorityBadge level={task.priority} />

      <div style={{ marginTop: "auto", paddingTop: "10px" }}>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={task.is_completed}
            onChange={() => onToggleComplete(task.id, task.is_completed)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default TaskCard;
