import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';


function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
      </main>
    </div>
  );
}

export default App;
