import React from "react";
import { Plus } from "lucide-react";

const Fab = () => {
  return (
    <div className="fab-container">
      <button className="fab-btn">
        Add Task <Plus size={24} />
      </button>
    </div>
  );
};

export default Fab;
