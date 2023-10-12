import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"
import MainTitle from "./components/MainTitle"
import MyStream from "./components/MyStream"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
       <Navbar />
       <LandingPage />
       <MainTitle id="About-Me" Title="About Me"/>
       <AboutMe />
       <MainTitle id="My-Streams" Title="My Streams"/>
       <MyStream/>
       <MainTitle id="My-Links" Title="My Links"/>
       <Footer />
    </div>
  );
}

export default App;
