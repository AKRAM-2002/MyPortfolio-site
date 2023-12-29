import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
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
      <Footer/>
     </main>
    </div>
  );
}

export default App;
