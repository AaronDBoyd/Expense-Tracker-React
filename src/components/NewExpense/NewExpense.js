import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formVisible, setFormVisible] = useState(false);

  const currentVisibleHandler = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!formVisible && (
        <button onClick={currentVisibleHandler}>AddNewExpense</button>
      )}

      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onChangeVisibility={currentVisibleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
