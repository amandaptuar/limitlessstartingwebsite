import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/Pillars';
import CheckoutFunnels from './components/CheckoutFunnels';
import Footer from './components/Footer';

import Question from './components/Question';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <>
      <Header onRegisterSuccess={() => setCurrentPage('questions')} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Problem />
          <HowItWorks />
          <Pillars />
          <CheckoutFunnels />
        </>
      ) : (
        <Question />
      )}
      <Footer />
    </>
  );
}

export default App;
