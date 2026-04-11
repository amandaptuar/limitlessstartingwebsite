import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Header = ({ onRegisterSuccess }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '',  
    email: '', 
    password: '', 
    confirmPassword: '', 
    occupation: '', 
    agreeTerms: false 
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      setStatus('error');
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMsg("You must agree to the terms and conditions");
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('users')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            occupation: formData.occupation,
            agree_terms: formData.agreeTerms
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          throw new Error('Email already exists.');
        }
        throw new Error(error.message || 'Failed to register');
      }

      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setRegisterOpen(false);
        const savedEmail = formData.email;
        setFormData({ name: '', email: '', password: '', confirmPassword: '', occupation: '', agreeTerms: false });
        setErrorMsg('');
        if (onRegisterSuccess) {
          onRegisterSuccess(savedEmail);
          window.scrollTo(0, 0);
        }
      }, 1500);

    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <>
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
              <a href="#audit" className="header-link" onClick={() => setMenuOpen(false)}>The Audit</a>
              <button
                className="btn btn-dark header-login"
                style={styles.registerBtn}
                onClick={() => { 
                  setRegisterOpen(true); 
                  setMenuOpen(false); 
                  setErrorMsg(''); 
                  setStatus('idle');
                }}
              >
                Register
              </button>
            </nav>
          </div>

        </div>
      </header>

      {/* Register Modal */}
      {registerOpen && (
        <div className="support-overlay" onClick={(e) => e.target === e.currentTarget && setRegisterOpen(false)}>
          <div className="support-modal">
            <button className="support-modal-close" onClick={() => setRegisterOpen(false)} aria-label="Close">✕</button>

            {status === 'success' ? (
              <div className="support-success">
                <div className="support-success-icon">✓</div>
                <h3>Registration Successful!</h3>
                <p>Welcome, <strong style={{ color: 'var(--primary)' }}>{formData.name}</strong>!</p>
              </div>
            ) : (
              <>
                <div className="support-modal-header">
                  <h2>Register</h2>
                  <p>Create your Limitless account.</p>
                </div>
                <form onSubmit={handleSubmit} className="support-form">
                  <div className="support-field">
                    <label htmlFor="register-name">Full Name</label>
                    <input
                      id="register-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="register-email">Email Address</label>
                    <input
                      id="register-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="register-password">Password</label>
                    <input
                      id="register-password"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="register-confirmPassword">Confirm Password</label>
                    <input
                      id="register-confirmPassword"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="register-occupation">Occupation</label>
                    <input
                      id="register-occupation"
                      type="text"
                      name="occupation"
                      placeholder="Your occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                    <input
                      id="register-agreeTerms"
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      style={{ width: 'auto', cursor: 'pointer' }}
                    />
                    <label htmlFor="register-agreeTerms" style={{ textTransform: 'none', cursor: 'pointer', margin: 0 }}>
                      I agree to the Terms and Conditions
                    </label>
                  </div>

                  {status === 'error' && errorMsg && (
                    <p style={styles.errorMsg}>
                      ⚠️ {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary support-submit"
                    disabled={status === 'submitting'}
                    style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                  >
                    {status === 'submitting' ? 'Registering...' : 'Register'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
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
  registerBtn: {
    padding: '10px 24px',
    borderRadius: '4px',
    fontSize: '15px',
    cursor: 'pointer',
    border: 'none',
  },
  errorMsg: {
    color: '#ff6b6b',
    fontSize: '14px',
    textAlign: 'center',
    background: 'rgba(255,107,107,0.08)',
    border: '1px solid rgba(255,107,107,0.2)',
    borderRadius: '8px',
    padding: '10px',
  }
};

export default Header;
