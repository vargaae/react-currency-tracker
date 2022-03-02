import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CurrencyPage from "./Pages/CurrencyPage";
import Header from "./components/Header";
import "./App.scss";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/currencies/:id" element={<CurrencyPage />} />
      </Routes>
    </div>
  );
}

export default App;
