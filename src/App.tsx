import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SEO } from "./components/SEO";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import TechnologyPage from "./pages/Technology";
import AboutPage from "./pages/About";
import AdminDashboard from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <Layout>
        <SEO />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<AboutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
