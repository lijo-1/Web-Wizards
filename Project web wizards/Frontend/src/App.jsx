import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
      </Routes>
    </Router>
  );
};

export default App;