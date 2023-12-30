import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hobbies from './components/Hobbies/Hobbies';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
     <main>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Hobbies/>
      <Contact/>
      <Footer/>
     </main>
    </div>
  );
}

export default App;
