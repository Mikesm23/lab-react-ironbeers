import './App.css';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
