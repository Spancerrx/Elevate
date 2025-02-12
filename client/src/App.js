import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/> } />
        <Route path="/register" element={<RegisterPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
