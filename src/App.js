import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
