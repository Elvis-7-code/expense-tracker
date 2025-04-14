
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.description || !formData.amount || !formData.date || !formData.category) {
      alert('Please fill in all fields');
      return;
    }

    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount),
      id: Date.now() // Simple way to generate unique IDs
    };

    onAddExpense(newExpense);

    setFormData({
      description: '',
      amount: '',
      date: '',
      category: ''
    });
  };

//   return (
//     <div className="expense-form-container">
//       <h2>Add New Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Expense description"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             placeholder="0.00"
//             step="0.01"
//             min="0"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="category">Category:</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           >
//             <option value="">Select a category</option>
//             <option value="Food">Food</option>
//             <option value="Transportation">Transportation</option>
//             <option value="Housing">Housing</option>
//             <option value="Utilities">Utilities</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Healthcare">Healthcare</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <button type="submit">Add Expense</button>
//       </form>
//     </div>
//   );
// }

export default ExpenseForm;