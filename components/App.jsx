import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 85.20,
      date: "2025-04-08",
      category: "Food"
    },
    {
      id: 2,
      description: "House rent",
      amount: 1200.00,
      date: "2025-04-01",
      category: "Housing"
    },
    {
      id: 3,
      description: "Gas bill",
      amount: 45.50,
      date: "2025-04-05",
      category: "Utilities"
    }
    {
        id: 4,
        description: "Internet bill",
        amount: 60.00,
        date: "2025-04-10",
        category: "Utilities"
    }
    // {
    //     id: 5,
    //     description: "Gym membership",
    //     amount: 50.00,
    //     date: "2025-04-15",
    //     category: "Health"
    // }
    // {
    //     id: 6,
    //     description: "Car insurance",
    //     amount: 120.00,
    //     date: "2025-04-20",
    //     category: "Transportation"
    // }
    // {
    //     id: 7,
    //     description: "Dining out",
    //     amount: 75.00,
    //     date: "2025-04-25",
    //     category: "Food"
    // }
    // {
    //     id: 8,
    //     description: "Medical expenses",
    //     amount: 200.00,
    //     date: "2025-04-30",
    //     category: "Health"
    // }
  ]);

export default App