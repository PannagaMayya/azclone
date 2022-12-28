//import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Items from "./Items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
