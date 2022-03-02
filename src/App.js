import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CurrencyPage from "./Pages/CurrencyPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/currencies/:id" element={<CurrencyPage />} />
      </Routes>
    </div>
  );
}

export default App;
