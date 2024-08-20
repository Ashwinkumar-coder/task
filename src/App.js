import React from 'react';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Accordion from './Components/Accordion';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
