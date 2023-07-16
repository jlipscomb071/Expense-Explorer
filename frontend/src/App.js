import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        // Process the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Expense Explorer
        </p>
      </header>
    </div>
  );
}

export default App;
