import Link from 'next/link';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: "LED Wall Rentals",
    slug: "led-wall-rental",
    description: "High-resolution indoor and outdoor LED video walls for maximum visual impact.",
    icon: "🖥️",
    hasPage: true,
  },
  {
    title: "Audio Visual Rentals",
    slug: "corporate-av-rental",
    description: "Complete AV packages including monitors, switchers, and presentation technology.",
    icon: "🔌",
    hasPage: true,
  },
  {
    title: "Sound Systems",
    slug: "sound-systems",
    description: "Crystal-clear line arrays, PA systems, and wireless mic packages.",
    icon: "🔊",
  },
  {
    title: "Stage Lighting",
    slug: "stage-lighting-rental",
    description: "Dynamic moving lights, uplighting, and theatrical washes to transform any venue.",
    icon: "💡",
  },
  {
    title: "Projection & Screens",
    slug: "projector-screen-rental",
    description: "High-lumen laser projectors and fast-fold screens for large audiences.",
    icon: "📽️",
  },
  {
    title: "Live Streaming",
    slug: "live-streaming",
    description: "Broadcast-quality streaming solutions for remote attendees.",
    icon: "📡",
    hasPage: true,
  },
  {
    title: "Hybrid Event Solutions",
    slug: "hybrid-event-solutions",
    description: "Seamless integration of in-person and virtual event technology.",
    icon: "🌐",
    hasPage: true,
  },
  {
    title: "Staging & Rigging",
    slug: "staging-rigging",
    description: "Custom stage builds, truss structures, and safe overhead rigging.",
    icon: "🏗️",
  }
];

export default function ServicesGrid() {
  return (
    <section className={`section`} id="services">
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-2">Core Services</h2>
          <p className="text-lg">Premium equipment and technical expertise for any scale.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              {service.hasPage && (
                <Link href={`/services/${service.slug}`} className={styles.cardLink}>Learn more &rarr;</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
