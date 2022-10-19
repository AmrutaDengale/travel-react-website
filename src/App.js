import { BrowserRouter,Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";



function App() {

 
  return (
        
        <BrowserRouter>
        
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GoToTop/>
        <Footer />
        </BrowserRouter>
    
  
  );
}

export default App;
