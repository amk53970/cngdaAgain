// Gotta have css!
import './App.css';

// component imports
import Home from './components/pages/Home';
import Deployment from './components/pages/Deployment';
import Burndown from './components/pages/Burndown';
import Burnup from './components/pages/Burnup';
import API from './components/pages/API';


// lib imports
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployment" element={<Deployment />} />
        <Route path="/burn-down" element={<Burndown />} />
        <Route path="/burn-up" element={<Burnup />} />
        <Route path="/API" element={<API />} />
      </Routes>
    </div>
  );
}

export default App;
