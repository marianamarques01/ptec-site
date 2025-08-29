import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";
import TermosUso from "./components/TermosUso";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <CookieBanner />
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<TermosUso />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
