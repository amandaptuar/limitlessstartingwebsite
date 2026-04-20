import React from 'react';

const Problem = () => {
  return (
    <section id="system" style={styles.section}>
      <div className="container">
        <h2 className="section-title slide-up" style={{ color: 'var(--white)' }}>Your wearables are giving you data exhaust, not direction.</h2>
        
        <div style={styles.grid}>
          <div style={styles.card} className="slide-up delay-100 dark-glass-panel">
            <div style={styles.iconWrap}>
              <img src="./new/iStock-2177161931-1024x602.webp" alt="Fragmented Systems" style={styles.iconImg} />
            </div>
            <h3 style={styles.cardTitle}>Fragmented Systems</h3>
            <p style={styles.cardText}>
              You have one app for sleep, another for meditation, and a third for workouts. None of them talk to each other.
            </p>
          </div>

          <div style={styles.card} className="slide-up delay-200 dark-glass-panel">
            <div style={styles.iconWrap}>
              <img src="./new/shutterstock_491481550.webp" alt="Information Overload" style={styles.iconImg} />
            </div>
            <h3 style={styles.cardTitle}>Information Overload</h3>
            <p style={styles.cardText}>
              Knowing your HRV dropped is useless if you don't know exactly how to adjust today's cognitive load to compensate.
            </p>
          </div>

          <div style={styles.card} className="slide-up delay-300 dark-glass-panel">
            <div style={styles.iconWrap}>
              <img src="./new/shutterstock_502885915.webp" alt="The App Trap" style={styles.iconImg} />
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
    padding: '30px',
    borderRadius: 'var(--radius-md)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  iconWrap: {
    width: '100%',
    height: '180px',
    borderRadius: 'var(--radius-sm)',
    overflow: 'hidden',
    marginBottom: '24px',
  },
  iconImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'var(--radius-sm)',
    transition: 'transform 0.4s ease',
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
