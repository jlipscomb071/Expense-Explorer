// HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/balance">
        <button>Balance</button>
      </Link>
      <Link to="/savings">
        <button>Savings</button>
      </Link>
      <Link to="/spending">
        <button>Spending</button>
      </Link>
    </div>
  );
};

export default HomePage;
