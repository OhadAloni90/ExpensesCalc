import React,{useState} from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const[isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enertedExpenseData) => {
        const expenseData  = {
            ...enertedExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    
    const startEditingHandler = ()=> {
        setIsEditing(true);
    }   

    const stopEditingHandler = () => {
        setIsEditing(false);

    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
        );
};

export default NewExpense;