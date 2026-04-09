import React from 'react';

const Pillars = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="section-title slide-up">A Unified System for Human Performance</h2>
        
        <div style={styles.list}>
          <div style={styles.listItem} className="slide-up delay-100">
            <div style={styles.icon}>🧠</div>
            <p style={styles.text}>
              <strong style={styles.strong}>Cognitive Mastery:</strong> Structured focus sprints, deep-work blocking, and cognitive load management.
            </p>
          </div>

          <div style={styles.listItem} className="slide-up delay-200">
            <div style={styles.icon}>⚡</div>
            <p style={styles.text}>
              <strong style={styles.strong}>Foundational Energy:</strong> Sleep architecture rules, hydration protocols, and strategic nutrition timing.
            </p>
          </div>

          <div style={styles.listItem} className="slide-up delay-300">
            <div style={styles.icon}>🛡️</div>
            <p style={styles.text}>
              <strong style={styles.strong}>Resilience & Recovery:</strong> Down-regulation tactics, Non-Sleep Deep Rest (NSDR), and nervous system resets.
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
    backgroundColor: 'var(--white)',
  },
  list: {
    maxWidth: '800px',
    margin: '60px auto 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    padding: '30px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    transition: 'var(--transition)',
    cursor: 'default',
  },
  icon: {
    fontSize: '48px',
    lineHeight: '1',
  },
  text: {
    fontSize: '20px',
    color: 'var(--text-muted)',
    margin: 0,
    lineHeight: '1.6',
  },
  strong: {
    color: 'var(--dark)',
    fontWeight: '700',
    fontFamily: 'var(--font-heading)',
  }
};

export default Pillars;
