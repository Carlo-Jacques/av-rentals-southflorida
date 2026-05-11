import Link from 'next/link';
import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <section className={`section ${styles.ctaBand}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="heading-2">Need Professional AV Support for Your Next Event?</h2>
          <p className="text-lg">
            Contact us today for a consultation and a detailed estimate. We are ready to elevate your production.
          </p>
        </div>
        <div className={styles.action}>
          <Link href="/contact" className="btn btn-primary">Get a Fast Quote</Link>
        </div>
      </div>
    </section>
  );
}
