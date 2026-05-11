import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background with overlay */}
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={`heading-1 animate-fade-in ${styles.title}`}>
          Professional AV Rentals in South Florida
        </h1>
        <p className={`text-lg animate-fade-in ${styles.subtitle}`} style={{ animationDelay: '0.2s' }}>
          LED walls, audio visual systems, staging, lighting, and event production support for corporate meetings, conferences, galas, and live events.
        </p>
        <div className={`animate-fade-in ${styles.actions}`} style={{ animationDelay: '0.4s' }}>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
          <Link href="/#services" className="btn btn-secondary">View Services</Link>
        </div>
      </div>
    </section>
  );
}
