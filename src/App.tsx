import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/myportfolio/" element={<Home />} />
        <Route path="/myportfolio/projects/:slug" element={<Projects />} />
      </Routes>
    </>
  );
}
