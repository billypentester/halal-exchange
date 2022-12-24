import * as React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { Routes, Route } from "react-router-dom"

import Landing from "./components/Landing"
import Swap from "./components/Swap"

import TokenRouter from "./components/Tokens/TokenRouter"
import PoolRouter from "./components/Pools/PoolRouter"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/swap" element={ <Swap/> } />
        <Route path="/tokens/*" element={ <TokenRouter/> } />
        <Route path="/pools/*" element={ <PoolRouter/> } />
      </Routes>
    </div>
  );
}
export default App;