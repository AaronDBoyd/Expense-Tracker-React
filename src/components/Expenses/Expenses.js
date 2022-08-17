import React, { useState } from "react";
// import PropTypes from "prop-types";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const byYear = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );


  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={byYear}/>
      </Card>
    </>
  );
}

Expenses.propTypes = {};

export default Expenses;
