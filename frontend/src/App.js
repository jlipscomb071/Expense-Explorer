import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Expenses} from './components/Expenses'
import {Reports} from './components/Reports'

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Dashboard />} ></Route>
      <Route path = 'Expenses' element = {<Expenses />} ></Route>
      <Route path = 'Reports' element = {<Reports />} ></Route>
    </Routes>
  );
}

export default App;
