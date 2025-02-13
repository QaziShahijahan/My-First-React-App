import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    {/* <Contact/> */}
    <Contact nameLabel="Your Full Name:" emailLabel="Your Work Email:" messageLabel="Type Your Message:" />

    </>
  );
}

export default App;
