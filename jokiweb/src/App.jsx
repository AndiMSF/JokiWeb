/* eslint-disable no-unused-vars */
import HomePage from "./scenes/homePage"
import Loginpage from "./scenes/loginPage"
import OrderPage from "./scenes/orderPage";
import RegisterPage from "./scenes/registerPage";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/order/valorant" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
