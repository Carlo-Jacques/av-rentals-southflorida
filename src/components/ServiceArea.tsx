import styles from './ServiceArea.module.css';

export default function ServiceArea() {
  const cities = [
    "Miami",
    "Fort Lauderdale",
    "West Palm Beach",
    "Boca Raton",
    "Hollywood",
    "Aventura",
    "Miami Beach"
  ];

  return (
    <section className={`section ${styles.serviceArea}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className="heading-2">South Florida Service Area</h2>
            <p className="text-lg">
              We provide professional AV rentals and comprehensive event production services across the entire South Florida region. Our local warehouse and expert technicians ensure rapid deployment and reliable execution.
            </p>
          </div>
          <div className={styles.locations}>
            <ul className={styles.cityList}>
              {cities.map((city, index) => (
                <li key={index} className={styles.cityItem}>
                  <span className={styles.check}>✓</span> {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
