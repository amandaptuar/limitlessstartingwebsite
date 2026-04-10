import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+1', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const countryCodes = [
    { code: '+1', label: '🇺🇸 +1 (US)' },
    { code: '+44', label: '🇬🇧 +44 (UK)' },
    { code: '+91', label: '🇮🇳 +91 (IN)' },
    { code: '+61', label: '🇦🇺 +61 (AU)' },
    { code: '+971', label: '🇦🇪 +971 (UAE)' },
    { code: '+65', label: '🇸🇬 +65 (SG)' },
    { code: '+49', label: '🇩🇪 +49 (DE)' },
    { code: '+33', label: '🇫🇷 +33 (FR)' },
    { code: '+81', label: '🇯🇵 +81 (JP)' },
    { code: '+86', label: '🇨🇳 +86 (CN)' },
    { code: '+55', label: '🇧🇷 +55 (BR)' },
    { code: '+52', label: '🇲🇽 +52 (MX)' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSupportOpen(false);
      setFormData({ name: '', email: '', phone: '', countryCode: '+1', details: '' });
    }, 2500);
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
              <a href="#system" className="header-link" onClick={() => setMenuOpen(false)}>The System</a>
              <a href="#audit" className="header-link" onClick={() => setMenuOpen(false)}>The Audit</a>
              <button
                className="btn btn-dark header-login"
                style={styles.supportBtn}
                onClick={() => { setSupportOpen(true); setMenuOpen(false); }}
              >
                Support
              </button>
            </nav>
          </div>

        </div>
      </header>

      {/* Support Modal */}
      {supportOpen && (
        <div className="support-overlay" onClick={(e) => e.target === e.currentTarget && setSupportOpen(false)}>
          <div className="support-modal">
            <button className="support-modal-close" onClick={() => setSupportOpen(false)} aria-label="Close">✕</button>

            {submitted ? (
              <div className="support-success">
                <div className="support-success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="support-modal-header">
                  <h2>Contact Support</h2>
                  <p>Fill in the form below and our team will reach out to you.</p>
                </div>
                <form onSubmit={handleSubmit} className="support-form">
                  <div className="support-field">
                    <label htmlFor="support-name">Full Name</label>
                    <input
                      id="support-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="support-email">Email Address</label>
                    <input
                      id="support-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="support-field">
                    <label htmlFor="support-phone">Phone Number</label>
                    <div className="phone-input-group">
                      <select
                        id="support-country-code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="country-code-select"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>
                      <input
                        id="support-phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="support-field">
                    <label htmlFor="support-details">Details</label>
                    <textarea
                      id="support-details"
                      name="details"
                      placeholder="Describe your issue or question..."
                      value={formData.details}
                      onChange={handleChange}
                      rows="4"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary support-submit">
                    Send Message
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
  supportBtn: {
    padding: '10px 24px',
    borderRadius: '4px',
    fontSize: '15px',
    cursor: 'pointer',
    border: 'none',
  }
};

export default Header;
