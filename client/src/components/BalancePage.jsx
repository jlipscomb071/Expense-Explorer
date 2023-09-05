import React, { useState, useEffect } from "react"
import { collection } from "../../../backend/schemas/defaultSchema.js"

const BalancePage = () => {
  const [checking, setChecking] = useState(null)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [depositAmount, setDepositAmount] = useState("")

  useEffect(() => {
    fetchCheckingBalance()
  }, [])

  const fetchCheckingBalance = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${collection}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const json = await response.json()
      setChecking(json[0]?.checking || null)
    } catch (error) {
      console.error("GET request failed:", error)
    }
  }

  const handleUpdateClick = () => {
    setShowUpdateForm(true)
  }

  const handleDepositChange = (event) => {
    setDepositAmount(event.target.value)
  }

  const handleConfirmClick = () => {
    // Add your logic here to handle storing the deposit amount
    setShowUpdateForm(false)
  }

  return (
    <div>
      <h1>Available Spending Balance</h1>
      <div style={styles.balanceTag}>
        <h2>Checking Balance:</h2>
        <p style={styles.balanceAmount}>${checking}</p>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
      {showUpdateForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.updateForm}>
          <button style={styles.closeButton} onClick={() => setShowUpdateForm(false)}>x</button>
            <h2>Enter New Deposit Amount:</h2>
            <input
              type="number"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={handleDepositChange}
            />
            <button style={styles.confirmButton} onClick={handleConfirmClick}>Confirm</button>
          </div>
        </div>
      )}
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
    marginBottom: "20px",
    position: "relative",
  },
  balanceAmount: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  updateForm: {
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  confirmButton: {
    marginTop: "10px",
    marginLeft: "10px", // Add margin to move the button to the right
  },
  closeButton: {
    backgroundColor: "red",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  }
}

export default BalancePage
