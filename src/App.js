import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contacts />
    </div>
  );
}

export default App;