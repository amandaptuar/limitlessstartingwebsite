import React from 'react';

const Hero = () => {
  return (
    <section style={styles.section} className="hero-section">
      <div className="container" style={styles.container}>
        <h1 className="slide-up delay-100" style={styles.h1}>
          You don’t need more data. You need a protocol.
        </h1>
        <p className="slide-up delay-200" style={styles.p}>
          Limitless is a holistic cognitive performance system delivered directly to your phone. No new apps to download. No confusing dashboards. Just expert, AI-guided daily execution across focus, energy, and clarity.
        </p>
        <div className="slide-up delay-300" style={styles.btnWrap}>
          <a href="#audit" className="btn btn-primary" style={styles.button}>
            START YOUR COGNITIVE AUDIT — $79
          </a>
        </div>
        
        <div className="slide-up delay-300" style={styles.socialProof}>
          <p style={styles.proofText}>As used by founders and executives at:</p>
          <div style={styles.logos}>
            <div style={styles.logoItem}>
              <img src="/img/logo-1.png" alt="Partner Logo 1" style={styles.logoImg} />
            </div>
            <span style={styles.dot}>•</span>
            <div style={styles.logoItem}>
              <img src="/img/logo-2.png" alt="Partner Logo 2" style={styles.logoImg} />
            </div>
            <span style={styles.dot}>•</span>
            <div style={styles.logoItem}>
              <img src="/img/1.jpg" alt="Partner Logo 3" style={styles.logoImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingTop: '200px',
    paddingBottom: '140px',
    textAlign: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '900px',
  },
  h1: {
    fontSize: '64px',
    lineHeight: '1.1',
    marginBottom: '24px',
    letterSpacing: '-1px',
    color: 'var(--white)',
    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  p: {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#e0e0e0',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  button: {
    padding: '20px 40px',
    fontSize: '18px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderRadius: 'var(--radius-sm)',
  },
  btnWrap: {
    marginBottom: '60px',
  },
  socialProof: {
    marginTop: '50px',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    paddingTop: '40px',
  },
  proofText: {
    fontSize: '14px',
    color: '#aaa',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    height: '40px',
    width: 'auto',
    maxWidth: '120px',
    objectFit: 'contain',
    transition: 'opacity 0.3s ease',
  },
  dot: {
    color: '#ccc',
  }
};

export default Hero;
