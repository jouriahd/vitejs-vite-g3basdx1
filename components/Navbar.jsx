import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "green", color: "pink" }}>
      <h2>TaskTracker</h2>
      <div>
        <Link to="/home" style={{ marginRight: "10px", color: "pink" }}>Home</Link>
        <Link to="/tasks" style={{ marginRight: "10px", color: "pink" }}>Tasks</Link>
        
        <Link to="/about" style={{ marginRight: "10px", color: "pink" }}>About</Link>
        <Link to="/contact" style={{ color: "pink" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;