import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.left}>
          Limitless Holistic Cognition © 2026
        </div>
        <div style={styles.right}>
          <a href="#privacy" style={styles.link}>Privacy Policy</a>
          <a href="#terms" style={styles.link}>Terms of Service</a>
          <a href="#contact" style={styles.link}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '30px 0',
    backgroundColor: 'var(--white)',
    borderTop: '1px solid var(--border-color)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  left: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  right: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    fontWeight: '500',
  }
};

export default Footer;
