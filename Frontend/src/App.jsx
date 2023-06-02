import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Loginpage";
import Signup from "./pages/Signuppage";
import Accoutpage from "./pages/Accountpage";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Accoutpage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
