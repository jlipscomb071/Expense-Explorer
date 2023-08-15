import React from "react";
import { useNavigate } from "react-router-dom";

const BalanceButton = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      <button onClick={() => navigate("/balance")}>View Spending Balance</button>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    marginBottom: "20px",
  },
};

export default BalanceButton;
