import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaqsPage from "./pages/faqsPage";
import HomePage from "./pages/homePage";
import OurProjectPage from "./pages/ourProjectPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-project" element={<OurProjectPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
