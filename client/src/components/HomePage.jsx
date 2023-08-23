import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <h1 className="homeTitle">Expense Explorer</h1>
      <div className="buttonGroup">
        <Link to="/balance" className="homeLink">
          Balance
        </Link>
        <Link to="/savings" className="homeLink">
          Savings
        </Link>
        <Link to="/spending" className="homeLink">
          Spending
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
