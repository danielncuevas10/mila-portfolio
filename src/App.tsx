import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { English } from "./pages/Landing/LandingEnglish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </Router>
  );
}

export default App;
