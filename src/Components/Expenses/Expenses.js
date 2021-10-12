import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilterYear] =  useState('2020') 
    const filterChangeHandler = selectedYear => {
      setFilterYear(selectedYear)
    }
    
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
        </Card>
      </div>
    );
}

export default Expenses;