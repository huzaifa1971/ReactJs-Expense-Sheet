import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 1000,
    date: new Date(2020, 7, 28),
  },
  {
    id: "e2",
    title: "Air Conditioner",
    amount: 80000,
    date: new Date(2021, 12, 1),
  },
  {
    id: "e3",
    title: "Car Issurance",
    amount: 10000,
    date: new Date(2022, 5, 8),
  },
  {
    id: "e4",
    title: "Desk",
    amount: 63000,
    date: new Date(2023, 2, 2),
  },
];

function App() {
  const [expense, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
