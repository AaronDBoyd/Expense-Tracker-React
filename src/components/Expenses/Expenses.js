import React, { useState } from "react";
// import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const byYear = props.items.filter( item => item.date.getFullYear().toString() === filteredYear);

  return (
    <>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {byYear.length === 0 && <p> No expenses found. </p>}
    {byYear.length > 0 &&
    byYear.map(expense => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
      ))}
      
    </Card>
    </>
  );
}

Expenses.propTypes = {};

export default Expenses;
