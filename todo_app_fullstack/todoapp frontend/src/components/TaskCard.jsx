import React from "react";

// Reusable Priority Badge
const PriorityBadge = ({ level }) => {
  const levelLower = level.toLowerCase();
  return (
    <span className={`priority-badge priority-${levelLower}`}>{level}</span>
  );
};

// Custom Checkbox Component
const CustomCheckbox = ({ isChecked }) => (
  <label className="custom-checkbox">
    <input type="checkbox" defaultChecked={isChecked} />
    <span className="checkmark"></span>
  </label>
);

const TaskCard = ({ task, isSelected }) => {
  return (
    <div className={`task-card ${isSelected ? "selected" : ""}`}>
      <div className="task-header flex-between">
        <div>
          <h3 className="task-title">{task.title}</h3>
          <div className="task-meta">Due: {task.dueDate}</div>
        </div>
        {/* We only show the Priority badge in the top right for the non-selected design style in the image,
            but for the selected one it's below. Let's standardize it below for simplicity based on most cards. */}
      </div>

      {/* The image shows priority below date, and checkbox at bottom */}
      <PriorityBadge level={task.priority} />

      <div style={{ marginTop: "auto", paddingTop: "10px" }}>
        <CustomCheckbox isChecked={task.completed} />
      </div>
    </div>
  );
};

export default TaskCard;
