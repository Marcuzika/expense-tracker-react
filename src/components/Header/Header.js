import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h2 className={classes.title}>Expense Tracker</h2>
    </header>
  );
};

export default Header;
