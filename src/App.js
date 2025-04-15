import { useState } from 'react';
import './App.css';

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
    },
    {
        id: 4,
        description: "Internet bill",
        amount: 60.00,
        date: "2025-04-10",
        category: "Utilities"
    },
    {
        id: 5,
        description: "Gym membership",
        amount: 50.00,
        date: "2025-04-15",
        category: "Health"
    },
    {
        id: 6,
        description: "Car insurance",
        amount: 120.00,
        date: "2025-04-20",
        category: "Transportation"
    },
    {
        id: 7,
        description: "Dining out",
        amount: 75.00,
        date: "2025-04-25",
        category: "Food"
    },
    {
        id: 8,
        description: "Medical expenses",
        amount: 200.00,
        date: "2025-04-30",
        category: "Health"
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0]
  });

  const addExpense = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };
    
    setExpenses([...expenses, newExpense]);
    setFormData({
      description: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    const compareValue = a[sortBy].toString().localeCompare(b[sortBy].toString());
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="sort-buttons">
          <button 
            onClick={() => handleSort('description')}
            className={sortBy === 'description' ? 'active' : ''}
          >
            Sort by Description {sortBy === 'description' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => handleSort('category')}
            className={sortBy === 'category' ? 'active' : ''}
          >
            Sort by Category {sortBy === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>
      
      <div className="content">
        <form onSubmit={addExpense} className="expense-form">
          <h2>Add New Expense</h2>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount ($)</label>
            <input
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <button type="submit">Add Expense</button>
        </form>
        
        <div className="expense-table">
          <h2>Expenses</h2>
          {sortedExpenses.length === 0 ? (
            <p>No expenses found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedExpenses.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>${expense.amount.toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button 
                        onClick={() => deleteExpense(expense.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;