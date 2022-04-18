import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Seimg from './components/Seimg';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/seimg/:id' element={<Seimg />} />

      </Routes>
    </Router>
  );
}

export default App;
