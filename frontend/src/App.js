import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Expense Explorer</h1>
      </header>
      <main className="App-main">
        <div className="App-bubbles">
          <a href="/dashboard" className="App-bubble">
            <span className="App-bubble-text">Budget Dashboard</span>
          </a>
          <a href="/expenses" className="App-bubble">
            <span className="App-bubble-text">Expenses</span>
          </a>
          <a href="/reports" className="App-bubble">
            <span className="App-bubble-text">Spending Reports</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
