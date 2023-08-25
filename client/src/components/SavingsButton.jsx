import React from "react"
import { useNavigate } from "react-router-dom"

const SavingsButton = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.header}>
      <button onClick={() => navigate("/savings")}>View Montly Savings Snapshot</button>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    marginBottom: "20px",
  }
}

export default SavingsButton
