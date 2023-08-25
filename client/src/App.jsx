import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import BalancePage from "./components/BalancePage"
import SavingsPage from "./components/SavingsPage"
import SpendingPage  from "./components/SpendingPage"

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/spending" element={<SpendingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

const styles = {
  app: {
    padding: 50,
  }
}

export default App
