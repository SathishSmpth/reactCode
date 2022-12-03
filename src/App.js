import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
