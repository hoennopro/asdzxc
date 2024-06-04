import React from "react";
import { Link } from "react-router-dom";

const Tabs: React.FC = () => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "0 10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
