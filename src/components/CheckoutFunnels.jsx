import React from 'react';

const CheckoutFunnels = () => {
  return (
    <section id="audit" style={styles.section}>
      <div className="container">
        <h2 className="section-title slide-up" style={{ color: 'var(--white)' }}>
          Baseline your biology. Take the Audit.
        </h2>

        <div style={styles.pricingWrapper} className="slide-up delay-200">
          <div style={styles.pricingCard}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>The Limitless Cognitive Audit</h3>
              <div style={styles.price}>
                $79 <span style={styles.priceLabel}>(One-Time Assessment)</span>
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.check}>✓</span> Deep-dive intake scoring across Cognitive, Energy, and Resilience pillars.
              </li>
              <li style={styles.listItem}>
                <span style={styles.check}>✓</span> Identification of your #1 performance bottleneck.
              </li>
              <li style={styles.listItem}>
                <span style={styles.check}>✓</span> Your personalized 7-Day Limitless Protocol (delivered via PDF).
              </li>
              <li style={styles.listItem}>
                <span style={styles.check}>✓</span> Bonus: 7 days of daily SMS accountability nudges.
              </li>
            </ul>

            <button className="btn btn-primary" style={styles.largeBtn}>
              BEGIN THE AUDIT ($79)
            </button>
            <p style={styles.microCopy}>
              After your 7-day protocol, you will have the option to join our recurring monthly membership for continuous optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--dark)',
    background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%)',
  },
  pricingWrapper: {
    maxWidth: '600px',
    margin: '50px auto 0',
  },
  pricingCard: {
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--radius-lg)',
    padding: '50px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '30px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '28px',
    marginBottom: '15px',
  },
  price: {
    fontSize: '56px',
    fontWeight: '800',
    fontFamily: 'var(--font-heading)',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '10px',
  },
  priceLabel: {
    fontSize: '16px',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  list: {
    marginBottom: '40px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    fontSize: '16px',
    color: 'var(--dark-light)',
    marginBottom: '20px',
    lineHeight: '1.6',
    fontWeight: '500',
  },
  check: {
    color: 'var(--primary)',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  largeBtn: {
    width: '100%',
    padding: '20px',
    fontSize: '18px',
    marginBottom: '20px',
    border: 'none',
  },
  microCopy: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    textAlign: 'center',
    lineHeight: '1.5',
    margin: 0,
  }
};

export default CheckoutFunnels;
