import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Loginpage";
import Signup from "./pages/Signuppage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
 