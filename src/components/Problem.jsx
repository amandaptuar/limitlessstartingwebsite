import React from 'react';

const Problem = () => {
  return (
    <section id="system" style={styles.section}>
      <div className="container">
        <h2 className="section-title slide-up" style={{ color: 'var(--white)' }}>Your wearables are giving you data exhaust, not direction.</h2>
        
        <div style={styles.grid}>
          <div style={styles.card} className="slide-up delay-100 dark-glass-panel">
            <div style={styles.iconWrap}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={styles.cardTitle}>Fragmented Systems</h3>
            <p style={styles.cardText}>
              You have one app for sleep, another for meditation, and a third for workouts. None of them talk to each other.
            </p>
          </div>

          <div style={styles.card} className="slide-up delay-200 dark-glass-panel">
            <div style={styles.iconWrap}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={styles.cardTitle}>Information Overload</h3>
            <p style={styles.cardText}>
              Knowing your HRV dropped is useless if you don't know exactly how to adjust today's cognitive load to compensate.
            </p>
          </div>

          <div style={styles.card} className="slide-up delay-300 dark-glass-panel">
            <div style={styles.iconWrap}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={styles.cardTitle}>The App Trap</h3>
            <p style={styles.cardText}>
              Managing your wellness stack drains the exact mental energy you are trying to optimize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--dark-light)',
    color: 'var(--white)',
    padding: '100px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '60px',
  },
  card: {
    padding: '40px',
    borderRadius: 'var(--radius-md)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  iconWrap: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(233, 161, 50, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  cardTitle: {
    color: 'var(--white)',
    fontSize: '24px',
    marginBottom: '16px',
  },
  cardText: {
    color: '#a0a0a0',
    fontSize: '16px',
    lineHeight: '1.6',
  }
};

export default Problem;
