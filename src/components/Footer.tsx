import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>

          <div className={styles.col}>
            <h3 className={styles.brand}>AV Rentals South Florida</h3>
            <p className={styles.about}>
              Professional AV rentals and event technology solutions across South Florida. Delivering enterprise-grade equipment and expert technicians for corporate meetings, conferences, and live events.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.list}>
              <li><Link href="/services/led-wall-rental">LED Wall Rentals</Link></li>
              <li><Link href="/services/corporate-av-rental">Audio Visual Rentals</Link></li>
              <li><Link href="/services/stage-lighting-rental">Stage Lighting</Link></li>
              <li><Link href="/services/projector-screen-rental">Projection & Screens</Link></li>
              <li><Link href="/services/hybrid-event-solutions">Hybrid Event Solutions</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#portfolio">Our Work</Link></li>
              <li><Link href="/locations/miami">Service Areas</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <span className={styles.icon}>📞</span> 1-844-746-9832
              </li>
              <li className={styles.contactItem}>
                <span className={styles.icon}>📍</span> Show Technology Inc<br />353 N Seaboard Rd,<br />Miami Gardens, FL 33169
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.affiliation}>
            AV Rentals South Florida is a proud partner of <a href="https://showtechinc.com/" target="_blank" rel="noopener noreferrer">Show Technology, Inc.</a>, providing enterprise event production nationwide.
          </p>
          <p>&copy; {new Date().getFullYear()} AV Rentals South Florida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
