import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header} className="dark-glass-panel">
      <div className="container header-container">
        
        <div className="header-logo-wrap">
          <img src="/img/limitless-logo.jpeg" alt="Limitless Logo" className="header-logo-img" />
        </div>
        
        <div className="header-title-wrap">
          <h2 className="header-logo-text" style={{ margin: 0 }}>Limitless Holistic Cognition</h2>
        </div>

        <div className="header-nav-wrap">
          <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#system" className="header-link" onClick={() => setMenuOpen(false)}>The System</a>
            <a href="#audit" className="header-link" onClick={() => setMenuOpen(false)}>The Audit</a>
            <a href="#login" className="btn btn-dark header-login" style={styles.loginBtn}>Login</a>
          </nav>
        </div>

      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: '6px 0',
  },
  loginBtn: {
    padding: '10px 24px',
    borderRadius: '4px',
    fontSize: '15px',
  }
};

export default Header;
