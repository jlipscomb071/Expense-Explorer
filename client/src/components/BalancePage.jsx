import React, { useState, useEffect } from "react"
import { collection } from "../../../backend/schemas/defaultSchema.js"

const BalancePage = () => {
  const [checking, setChecking] = useState(null)

  useEffect(() => {
    fetchCheckingBalance()
  }, [])

  const fetchCheckingBalance = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${collection}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const json = await response.json();
      setChecking(json[0]?.checking || null)
    } catch (error) {
      console.error("GET request failed:", error)
    }
  }

  return (
    <div>
      <h1>Available Spending Balance</h1>
      <div style={styles.balanceTag}>
        <h2>Checking Balance:</h2>
        <p style={styles.balanceAmount}>${checking}</p>
      </div>
    </div>
  )
}

const styles = {
  balanceTag: {
    backgroundColor: "#2A5D8F",
    color: "white", 
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "20px"
  },
  balanceAmount: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px"
  }
}



export default BalancePage
