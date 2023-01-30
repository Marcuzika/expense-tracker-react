import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>No expenses found</h2>
    );
  }

  return (
    <ul className={classes["expenses-list"]}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
