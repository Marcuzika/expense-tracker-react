import { useState, Fragment } from "react";

import Header from "./components/Header/Header";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Fragment>
      <Header />
      <main>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
