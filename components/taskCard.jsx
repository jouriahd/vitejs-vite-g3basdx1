function TaskCard({ title, priority}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", width: "200px" }}>
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
    </div>
  );
}

export default TaskCard;