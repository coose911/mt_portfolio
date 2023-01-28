import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Container/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import logo from './images/My_Logo.png'



const ImageContainer = styled.div`
    & > img {
    width: 20%;
    margin-left: 78%;
    margin-top: -1em;
    margin-bottom: -8em;
    height: 40%}
`


function App() {


  return (
    <>
    <div>
    <ImageContainer>
    <img src={logo} />
    </ImageContainer>
    </div>
    <div>
    <Router>
        <NavBar></NavBar>
        <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route exact path="/projects" element={ <Projects/>} />
            <Route exact path="/contact" element={ <Contact/>} />
        </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;