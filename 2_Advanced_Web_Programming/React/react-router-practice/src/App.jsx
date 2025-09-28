import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <form action='/'>
                    <input type='submit' value='Back to Start' />
                </form>
                <div className="container">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element=<Root /> />
                        <Route path="/home" element=<Home /> />
                        <Route path="/about" element=<About /> />
                        <Route path="/contact" element=<Contact /> />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
export default App;