import * as React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { Routes, Route } from "react-router-dom"

import Landing from "./components/Landing"
import Swap from "./components/Swap"
import Tokens from "./components/Tokens"
import Pools from "./components/Pools"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/swap" element={ <Swap/> } />
        <Route path="tokens" element={ <Tokens/> } />
        <Route path="pools" element={ <Pools/> } />
      </Routes>
    </div>
  );
}
export default App;