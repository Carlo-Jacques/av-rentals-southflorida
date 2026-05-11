import styles from './TrustSection.module.css';

export default function TrustSection() {
  const eventTypes = [
    "Corporate Events",
    "Conferences",
    "Trade Shows",
    "Hybrid Events",
    "Galas",
    "Live Productions"
  ];

  return (
    <section className={`section ${styles.trustSection}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.copy}>
            <h2 className="heading-3">Trusted by industry leaders across South Florida.</h2>
            <p className="text-lg">
              Delivering flawless execution, enterprise-grade technology, and professional support for high-stakes events. As a trusted regional partner, we integrate seamlessly with <a href="https://showtechinc.com/services/audio-visual-production/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>comprehensive audio visual production services</a> to ensure your large-scale vision is executed flawlessly.
            </p>
          </div>
          <div className={styles.tags}>
            {eventTypes.map((type, index) => (
              <span key={index} className={styles.tag}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
