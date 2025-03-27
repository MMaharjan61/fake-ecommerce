import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
