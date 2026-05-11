import styles from './SocialProof.module.css';

export default function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>Trusted AV Production Partner For</p>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <span className={styles.icon}>🏢</span>
            <span>Fortune 500 Companies</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.icon}>🏆</span>
            <span>Award-Winning Production</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.icon}>⭐</span>
            <span>5-Star Client Reviews</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.icon}>🛡️</span>
            <span>Enterprise-Grade Equipment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
