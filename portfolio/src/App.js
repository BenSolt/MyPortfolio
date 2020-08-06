import React from 'react';
import './App.css';

import './css/navbar.css';
import './css/navbarMedia.css';
import './css/footer.css';
import './css/home.css';
import './css/artworkk.css';
import './css/artworkkMedia.css';
import './css/projects.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';
import Home from './components/home/Home';
import Artwork from './components/home/Artwork';
import Codework from './components/home/Projects';
import UnrealEngine from './components/home/UnrealEngine';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

<Navbar/>
      
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/codework" component={Codework}/>
        <Route exact path="/artwork" component={Artwork}/>
        <Route exact path="/unrealengine" component={UnrealEngine}/>
      </div>

      <footer className="footerholder">
              <Footer/> 
              </footer>
    </div>
  );
}

export default App;
