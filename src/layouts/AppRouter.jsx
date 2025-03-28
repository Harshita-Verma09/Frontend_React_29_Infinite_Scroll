import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
