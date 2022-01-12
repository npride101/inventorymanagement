import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppNavbar from './components/AppNavbar';
import AppDataDisplay from './components/AppDataDisplay';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import View from './components/View'
import Edit from './components/Edit'


function App() {
  return (
    // <Router>
      <div className="App">
        <AppNavbar />
        <AppDataDisplay />
      </div>
      // <Routes>
      //   <Route path="/" element={<View/>} />
      //   <Route path="/view" element={<View/>} />
      //   <Route path="/edit" element={<Edit/>} />
      // </Routes>
    // </Router>

  );
}

export default App;
 