import React from 'react';

const HowItWorks = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="section-title slide-up" style={{ textAlign: 'center' }}>Elite Coaching, Zero Friction.</h2>
        
        <div style={styles.timeline}>
          {/* Step 1 */}
          <div style={styles.step} className="slide-up delay-100">
            <div style={styles.number}>1</div>
            <div style={styles.content}>
              <h3 style={styles.stepTitle}>The Intake Audit</h3>
              <p style={styles.stepText}>
                Complete our deep-dive clinical assessment covering your cognitive, physical, and foundational baseline.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={styles.step} className="slide-up delay-200">
            <div style={styles.number}>2</div>
            <div style={styles.content}>
              <h3 style={styles.stepTitle}>The Protocol</h3>
              <p style={styles.stepText}>
                Our engine synthesizes your data into a customized, structured execution plan.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={styles.step} className="slide-up delay-300">
            <div style={styles.number}>3</div>
            <div style={styles.content}>
              <h3 style={styles.stepTitle}>Daily Delivery</h3>
              <p style={styles.stepText}>
                Receive your daily nudges, focus windows, and recovery targets via SMS, WhatsApp, or Email. You just execute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--light-gray)',
    padding: '120px 0',
  },
  timeline: {
    maxWidth: '800px',
    margin: '60px auto 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    position: 'relative',
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '30px',
    backgroundColor: 'var(--white)',
    padding: '40px',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    position: 'relative',
    zIndex: 2,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  number: {
    width: '60px',
    height: '60px',
    flexShrink: 0,
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
    fontSize: '28px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    fontFamily: 'var(--font-heading)',
    boxShadow: '0 4px 15px rgba(233, 161, 50, 0.4)',
  },
  content: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  stepText: {
    fontSize: '18px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  }
};

export default HowItWorks;
