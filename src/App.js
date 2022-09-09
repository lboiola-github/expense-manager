import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 123.4, date: new Date(2020, 2, 22) },
    { id: 'e2', title: 'Car Insurance', amount: 222.3, date: new Date(2020, 2, 25) },
    { id: 'e3', title: 'Cats Food', amount: 333.2, date: new Date(2020, 3, 3) },
    { id: 'e4', title: 'Basic Stuff', amount: 44133.00, date: new Date(2020, 4, 12) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
