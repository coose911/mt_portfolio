import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Container/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {


  return (
    <div>
    <h1>Hello</h1>
    <Router>
        <NavBar></NavBar>
        <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route exact path="/projects" element={ <Projects/>} />
            <Route exact path="/contact" element={ <Contact/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;