import "./App.css";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Landing></Landing>
        <div>
          <ScrollUpButton />
        </div>
        <About path="/about"></About>
        <Portfolio path="portfolio"></Portfolio>
        <Contact path="contact"></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
