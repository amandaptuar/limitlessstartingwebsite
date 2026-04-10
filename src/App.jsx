import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/Pillars';
import CheckoutFunnels from './components/CheckoutFunnels';
import Footer from './components/Footer';

import Question from './components/Question';
import Admin from './components/Admin';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [userEmail, setUserEmail] = React.useState('');

  const handleRegisterSuccess = (email) => {
    setUserEmail(email);
    setCurrentPage('questions');
  };

  return (
    <>
      {currentPage !== 'admin' && (
        <Header 
          onRegisterSuccess={handleRegisterSuccess} 
          onAdminLogin={() => setCurrentPage('admin')} 
        />
      )}
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Problem />
          <HowItWorks />
          <Pillars />
          <CheckoutFunnels />
        </>
      ) : currentPage === 'questions' ? (
        <Question userEmail={userEmail} />
      ) : (
        <Admin />
      )}
      {currentPage !== 'admin' && <Footer />}
    </>
  );
}

export default App;
