import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Experiences from "./pages/Experiences";
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import "./styles/Navbar.css";
import Footer from './components/Footer';
import DisplayDetail from './pages/DisplayDetail';
function App() {
  return (
    <div className='todo-app'>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/experience' element={<Experiences/>}/>
          <Route path='/projects'  element={<Projects/>}/>
          {/*<Route path='/projects/:id' element={<DisplayDetail/>}/>*/}
        </Routes>
        <Footer/>

      </Router>
    </div>
  
  );
}

export default App;
