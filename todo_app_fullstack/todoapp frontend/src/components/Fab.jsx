import React from "react";
import { Plus } from "lucide-react";

const Fab = ({ onAddTask }) => {
  return (
    <div className="fab-container">
      <button className="fab-btn" onClick={onAddTask}>
        Add Task <Plus size={24} />
      </button>
    </div>
  );
};

export default Fab;
