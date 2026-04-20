import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/Pillars';
import CheckoutFunnels from './components/CheckoutFunnels';
import Footer from './components/Footer';

import Question from './components/Question';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';

function App() {
  const [currentPage, setCurrentPage] = React.useState(() => {
    return window.location.pathname.match(/\/admin\/?$/) ? 'admin_login' : 'home';
  });
  const [userEmail, setUserEmail] = React.useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname.match(/\/admin\/?$/) ? 'admin_login' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRegisterSuccess = (email) => {
    setUserEmail(email);
    setCurrentPage('questions');
  };

  const isHomeOrQuestions = currentPage === 'home' || currentPage === 'questions';

  return (
    <>
      {isHomeOrQuestions && (
        <Header 
          onRegisterSuccess={handleRegisterSuccess} 
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
      ) : currentPage === 'admin_login' ? (
        <AdminLogin onLoginSuccess={() => setCurrentPage('admin_panel')} />
      ) : (
        <Admin />
      )}
      {isHomeOrQuestions && <Footer />}
    </>
  );
}

export default App;
