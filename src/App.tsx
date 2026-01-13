import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { English } from "./pages/Landing/LandingEnglish";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Analytics />
        <Route path="/" element={<Landing />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </>
  );
}

export default App;
