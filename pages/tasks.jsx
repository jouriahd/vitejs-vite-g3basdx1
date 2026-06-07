import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const items = [
    { id: 1, title: "Design Landing Page", priority: "High" },
    { id: 2, title: "Setup Database Schema", priority: "Medium" },
    { id: 3, title: "Write API Documentation", priority: "Low" }
  ];

  const [count] = useState(items.length);

  return (
    <div color:pink style={{ padding: "20px" }}>
      <h1>Our Current Tasks ({count})</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {items.map((item) => (
          <TaskCard
            key={item.id} 
            title={item.title}
            priority={item.priority}
      
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;